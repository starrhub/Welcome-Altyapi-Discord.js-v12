const { joinVoice, checkVoice } = require('../utils/voice');

module.exports = {
    name: 'ready',
    once: true,
    execute(client, tokenData, clients) {
        console.log(`${client.user.tag} olarak giriş yapıldı!`);
        
        client.user.setPresence({
            status: tokenData.status,
            activity: {
                name: tokenData.durum
            }
        });

        setTimeout(async () => {
            try {
                await joinVoice(client, tokenData.sesId);
            } catch (error) {
                console.error(`Ses kanalına katılma hatası: ${error}`);
            }
        }, 5000);

        setInterval(() => {
            if (!checkVoice(client, tokenData.sesId)) {
                console.log(`${client.user.tag} ses kanalından çıkmış, yeniden bağlanılıyor...`);
                joinVoice(client, tokenData.sesId);
            }
        }, 60000);
    },
};