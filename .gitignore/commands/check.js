const Discord = require('discord.js') 

exports.run = (client, message, args, ops) => {
     var etat = ':good: Tous les systèmes sont opérationnel' 
     
     if(client.ping > 250) return etat = ':normal: Redémarrage conseillé.' 
     if(client.ping > 800) return etat = ':charged: Gros risques de lag, redémarrage requis.' 
     if(client.ping > 2000) return etat = ":surcharged: Si ce n'est pas réglé dans quelques minutes, redémarrage urgent."  
   
     
     const mainEmbed = new Discord.RichEmbed()
         .setFooter(etat) 
     message.channel.send(mainEmbed)
} 
