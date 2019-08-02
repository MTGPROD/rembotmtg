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
         .addField(`Permissions of THIS channel`, `\`\`\`${chnl.permissionOverwrites}\`\`\``)
         .addField(`Position(list)`, `${chnl.position}`)
         .addField(`Position(calculated)`, `${chnl.calculatedPosition}`)
         .addField(`Deletable by me`, `${chnl.deletable}`)
         .addField(`Manageable by me`, `${chnl.manageable}`)
         .addField(`Last message ID`, `||${chnl.lastMessageID}||`) 
         .addField(`Your permissions`, `\`\`\`${chnl.memberPermissions(message.author)}\`\`\``)  
           
                  
 
     message.channel.send(mainEmbed) 
     
        let embed2 = new Discord.RichEmbed()     .setTitle('Commande `r!animes` a été utilisée !')     .addField(`User:`, `\`${message.author.username}\``)     .addField(`ID:`, `\`${message.author.id}\``)     .setColor('#36393F')     .addField(`Discrinator:`, `\`${message.author.discriminator}\``)     .addField(`Created At:`, `\`${message.author.createdAt}\``)     .addField(`GuildID:`, `\`${message.guild.id}\``)     .addField(`Guild Name:`, `\`${message.guild.name}\``)     .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)     .addField(`Full content:`, `\`${message.content}\``)     .addField(`Anime research:`, `\`${args}\``)     .setThumbnail(message.author.avatarURL)  
client.channels.get('503494406264061963').send({embed: embed2});
} 
