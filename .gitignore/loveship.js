const Discord = require('discord.js')

exports.run = (bot, message, args) => {
var target = message.mentions.mentions.first() 
if(!target) return message.channel.send('Pls mention a user !')
let fetched = Math.floor(Math.random() * 100)

const mainEmbed = new Discord.RichEmbed() 
     .setTitle(`Loveship ❤️-❤️`)
     .setColor('#ffbaf0')
     .setDescription(`**${message.author.username}** ${fetched}% **${target.username}** `)
message.channel.send(mainEmbed) 
}

exports.help = {
  name: 'loveship', 
  aliases: ['ship', 'love']
}