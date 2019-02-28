const Discord = require('discord. js')

exports.run = (client, message, args) => {
     if(args[0].length < 18) return message.channel.send(`\`${args[0]}\`is not an ID.`) 
     if(args[0] === isNaN) return message.channel.send(`\`${args[0]}\`is not an ID.)
     const chnl = client.channels.get(message.channel.id || args[0])
     

     const mainEmbed = new Discord.RichEmbed() 
         .setTitle(`#${chnl.name}`)
         .addField(`ID`, `${chnl.id}`, true)
         .addField(`CreatedAt`, `${chnl.createdAt}`)
     message.channel.send(mainEmbed) 
} 
