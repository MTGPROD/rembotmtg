const Discord = require('discord.js') 

exports.run = (client, message, args, ops) => {
     var etat = '<:good:520015496133738497> Tous les systèmes sont opérationnels.' 
     
     if(client.ping > 250) return etat = '<:normal:520015530162389033> Redémarrage conseillé.' 
     if(client.ping > 800) return etat = '<:charged:520015546293420062> Gros risques de lag, redémarrage requis.' 
     if(client.ping > 2000) return etat = "<:surcharged:520015562210934785> Si ce n'est pas réglé dans quelques minutes, redémarrage urgent."  
   
     
     const mainEmbed = new Discord.RichEmbed()
         .setDescription(etat) 
     message.channel.send(mainEmbed)
} 
