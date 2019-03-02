const Discord = require('discord.js')

exports.run = (client, message, args) => {
     
     var chnl = message.channel
     var notSafe = 'No (My nsfw commands are disabled on this channel.)'
     if(chnl.nsfw === true) {
          notSafe = 'Yes (My nsfw commands are enable.)' 
     } 
     
     const mainEmbed = new Discord.RichEmbed() 
         .setTitle(`#${chnl.name}`)
         .addField(`ID`, `${chnl.id}`, true)
         .addField(`Mention`, `<#${chnl.id}>`, true) 
         .addField(`Creation date`, chnl.createdAt) 
         .addField(`Not Safe For Work ?`, `${notSafe}`)     
         .addField(`CreatedAt`, `${chnl.createdAt}`)
     message.channel.send(mainEmbed) 
} 
