const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const path = require('path');
const clients = [];

config.tokens.forEach((tokenData, index) => {
    const client = new Discord.Client({
        fetchAllMembers: true,
        disableMentions: 'everyone'
    });

    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        try {
            const event = require(`./events/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(client, tokenData, clients));
            } else {
                client.on(event.name, (...args) => event.execute(client, tokenData, clients));
            }
        } catch (error) {
            console.error(`Event yükleme hatası (${file}):`, error);
        }
    }

    client.on('error', error => {
        console.error(`Client error (Bot ${index + 1}):`, error);
    });

    client.on('warn', warning => {
        console.warn(`Client warning (Bot ${index + 1}):`, warning);
    });

    setTimeout(() => {
        client.login(tokenData.token)
            .then(() => {
                clients.push(client);
            })
            .catch(error => {
                console.error(`Bot ${index + 1} giriş hatası:`, error);
            });
    }, index * 5000);
});

module.exports = { clients };

process.on('SIGINT', () => {
    console.log('Botlar kapatılıyor...');
    clients.forEach(client => {
        if (client.voice && client.voice.connections) {
            client.voice.connections.forEach(connection => {
                connection.disconnect();
            });
        }
        client.destroy();
    });
    process.exit(0);
});

console.log('Botlar başlatılıyor...');