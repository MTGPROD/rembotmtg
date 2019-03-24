const Discord = require('discord.js') 

exports.run = (client, message, args) => {
     const mainEmbed = new Discord.RichEmbed() 
         .setTitle('Vote for me on DBL')
         .setDescription('Click here => [<:discordbotlist:338808864352763904>](https://discordbots.org/bot/488734399509168148/vote)')
     message.channel.send(mainEmbed) 
} 
