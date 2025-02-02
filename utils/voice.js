async function joinVoice(client, channelId) {
    return new Promise((resolve) => {
        try {
            const channel = client.channels.cache.get(channelId);
            if (!channel) {
                console.log(`Kanal bulunamadı: ${channelId}`);
                return resolve(false); 
            }

            channel.join()
                .then(connection => {
                    console.log(`${client.user.tag} başarıyla ${channel.name} kanalına katıldı!`);
                    resolve(connection);
                })
                .catch(() => {
                    resolve(false);
                });
        } catch {
            resolve(false);
        }
    });
}

function checkVoice(client, channelId) {
    try {
        const channel = client.channels.cache.get(channelId);
        if (!channel) return false;
        return channel.members.has(client.user.id);
    } catch {
        return false;
    }
}

module.exports = { joinVoice, checkVoice };