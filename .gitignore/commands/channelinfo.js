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
         .addField(`Permissions of THIS channel`, `\`\`\`${chnl.permissionOverwrites.map()}\`\`\``)
         .addField(`Position(list)`, `${chnl.position}`)
         .addField(`Position(calculated)`, `${chnl.calculatedPosition}`)
         .addField(`Deletable by me`, `${chnl.deletable}`)
         .addField(`Manageable by me`, `${chnl.manageable}`)
         .addField(`Last message ID`, `||${chnl.lastMessageID}||`) 
         .addField(`Your permissions`, `\`\`\`${chnl.memberPermissions(message.author)}\`\`\``)  
           
                  
 
     message.channel.send(mainEmbed) 
} 
