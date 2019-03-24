const Discord = require('discord.js') 

exports.run = (client, message, args) => {
     const mainEmbed = new Discord.RichEmbed() 
         .setTitle('Vote for me on DBL')
         .setDescription('[Vote](https://discordbots.org/bot/495584319604260867/vote)')
     message.channel.send(mainEmbed) 
} 
