const Discord = require('discord. js')

exports.run = (client, message, args) => {
     
     var chnl = message.channel

     const mainEmbed = new Discord.RichEmbed() 
         .setTitle(`#${chnl.name}`)
         .addField(`ID`, `${chnl.id}`, true)
         .addField(`CreatedAt`, `${chnl.createdAt}`)
     message.channel.send(mainEmbed) 
} 
