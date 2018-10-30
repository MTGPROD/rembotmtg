const Discord = require('discord.js')
/*const infos = require('./infos.json')*/

exports.run = (client, message, args, ops) => {
  var cible = message.mentions.users.first()
  
  
  message.cible.setRoles([])
  .then(member => message.channel.send(`${member.displayName} neutralized`))
  .catch(console.error);
}
