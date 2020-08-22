const Discord = require('discord.js');
exports.run = async(client, message, args) => {
let sayı = args[0]  
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Yetersiz Yetki");
if(isNaN(sayı)) return message.channel.send("Sadece Sayı Giriniz.");
if(!sayı) return message.channel.send("Kaçmesaj silmem gerek");
message.channel.bulkDelete(sayı).catch(console.error)
  message.channel.send(`${sayı} Adet Mesaj Sildim.!`).then(s => s.delete(7000));
}
exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};
exports.help = {
  name: 'temizle',
  description: 'mesaj siiler',
  usage: 'temizle 100'
};