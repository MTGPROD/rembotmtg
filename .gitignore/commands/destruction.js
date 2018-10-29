const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
   var Owner = '❌';  
   var User = '✅';
     
     if(message.author.id === '234234723314958339') {
          Owner = '✅'
     } else {
          Owner = '❌';
     }
   
     if(message.guild.member.hasPermission('ADMINISTRATOR')) {
          User = '✅';
     } else {
         User = '❌';
     }
     
     const embed = new Discord.RichEmbed()
         .setTitle("Bienvenue dans l'interface de desctruction de serveurs discord.")
         .setDescription("Cette fonction n'est pas encore implémenter, veuillez revenir plus tard")
         .addField(`Requirements`, `Owner of the bot: ${Owner}\nUser permission: ${User}}`)
     
         message.channel.send(embed)
}
