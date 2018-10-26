const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
     const embed = new Discord.RichEmbed()
         .setTitle('Bienvenue dans l\'interface de desctruction de serveurs discord.')
         .setDescription('Cette fonction n'est pas encore implémenter, veuillez revenir plus tard')
         message.channel.send(embed)
}
