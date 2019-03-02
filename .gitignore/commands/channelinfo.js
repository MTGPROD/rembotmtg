const Discord = require('discord.js')

exports.run = (client, message, args) => {
     
     var chnl = message.channel
     var notSafe = 'No (My nsfw commands are disabled on this channel.)'
     var ifTyping = 'Nobody is typing'
     if(chnl.nsfw === true) {
          notSafe = 'Yes (My nsfw commands are enable.)' 
     } 
     if(chnl.typing === true) {
         ifTyping = 'Yes'
     } 
     
     const mainEmbed = new Discord.RichEmbed() 
         .setTitle(`#${chnl.name}`)
         .addField(`ID`, `${chnl.id}`, true)
         .addField(`Mention`, `<#${chnl.id}>`, true) 
         .addField(`Creation date`, chnl.createdAt) 
         .addField(`Not Safe For Work ?`, `${notSafe}`)     
         .addField(`Category/Parent`, `${chnl.parent} ||${chnl.parentID}||`)
         .addField(`Topic`, `**${chnl.topic}**`)
         .addField(`Developpement informations`, `[======] `)
         .addField(`Members typing`, ifTyping) 
                  
 
     message.channel.send(mainEmbed) 
} 
