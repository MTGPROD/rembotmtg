const Discord = require('discord.js')

exports.run = (client, message, args) => {
     const mainEmbed = new Discord.RichEmbed()
         .setTitle('Images generation help menu.')
         .setDescription('Thanks to the Arcadia API')
         .addField(`Filter`, `Nope`)
         .addField(`Generation`, '`beautiful, rainbow`') 
         .addField('Text', 'Nope')
         .setFooter('Powered by Arcadia API')
     message.channel.send(mainEmbed)
         
} 
