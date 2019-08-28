const Discord = require('discord.js') 

exports.run = (bot, message, args) => {
  if(message.author.id != "234234723314958339") return; 
     var etat = '<:good:520015496133738497> Tous les systèmes sont opérationnels.' 
     
     if(bot.ping > 40) {
         
         etat = '<:normal:520015530162389033> Redémarrage conseillé.' 
     } 
     if(bot.ping > 120) {
          etat = '<:charged:520015546293420062> Gros risques de lag, redémarrage requis.' 
     } 
     if(bot.ping > 800) {
          etat = "<:surcharged:520015562210934785> Si ce n'est pas réglé dans quelques minutes, redémarrage urgent."  
     } 
   
     
     const mainEmbed = new Discord.RichEmbed()
         .setDescription(etat) 
     message.channel.send(mainEmbed)
} 

exports.help = {name: "pp", aliases: []} 