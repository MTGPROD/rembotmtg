const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
    color = args[0]
    role = args[1]
    
    
message.role(role).setColor(color)
  .then(updated => message.channel.send(`Color set to **${role.color}**`))
  .catch(console.error);
  }
