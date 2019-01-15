const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
message.channel.createInvite()
  .then(invite => message.channel.send(`https://discord.gg/${invite.code}`))
  .catch(console.error);
}