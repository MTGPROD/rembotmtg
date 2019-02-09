const Discord = require('discord.js')

exports.run = (client, message, args) => {
     const mainEmbed = new Discord.RichEmbed() 
          .setAuthor(message.author.username, message.author.displayAvatarURL)
          .setTitle('50/50 Challenge')
          .setURL('https://reddit.com/r/5050pics')
          .setFooter('From Reddit')
     message.channel.send(mainEmbed) 
} 
