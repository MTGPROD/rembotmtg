const Discord = require('discord.js')

exports.run = (client, message, args) => {
     const Watora = new Discord.RichEmbed()
        .setTitle('Bot: Watora#2790, Author: Zenrac#0001')
        .setThumbnail('https://cdn.discordapp.com/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.webp?size=1024')
        .addField(':star: 8.13/10', '"Good loli."')
        .setColor('#9f39ad') 
        
     message.channel.send(Watora)
}
