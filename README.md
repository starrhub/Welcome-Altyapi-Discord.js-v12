# Welcome Bot Discord.js v14 Altyapısı

Bu altyapı, Discord.js v14 kullanılarak kodlanmış bir welcome altyapısıdır.

## 🔧 Kurulum

### Gereksinimler
- [Node.js](https://nodejs.org/en/) (v16.9.0 veya üstü)
- Bir metin editörü (örn: VSCode, Sublime Text)
- Bir Discord botu ([Discord Developer Portal](https://discord.com/developers/applications))

### Adımlar
1. Bu repoyu indirin:

Bu projeyi indirin ve metin editöründe açın.

2. Gerekli modülleri yükleyin:
```bash
npm install
```

3. `config.json` dosyasını düzenleyin:
```json
{
    "tokens": [
        {
            "token": "BOT_TOKEN1",
            "sesId": "SES_ID",
            "durum": "DURUM_YAZISI",
            "status": "idle"
        },
        {
            "token": "BOT_TOKEN2",
            "sesId": "SES_ID",
            "durum": "DURUM_YAZISI",
            "status": "online"
        },
        {
            "token": "BOT_TOKEN3",
            "sesId": "SES_ID",
            "durum": "DURUM_YAZISI",
            "status": "dnd"
        }
    ]
} // İstediğiniz kadar arttırabilirsiniz.
```

4. Botu başlatın:
```bash
node .
```

## 📝 Özellikler
- Kolayca kurulumu yapın.
- İstediğiniz gibi özelleştirin.
- Log kanalı ile tüm yapılan işlemleri kaydedin.

## 🤝 Destek
Herhangi bir sorun için [Shell Co.](https://discord.gg/ekePqzFJUz) Discord sunucumuza katılabilirsiniz.

## 📜 Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakın.

## ⭐ Star
Beğendiyseniz star atmayı unutmayın!

---
Developed with ❤️ by [Shell Co.](https://discord.gg/ekePqzFJUz)
