const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
     name = args.join(' ')
     
  message.guild.edit({
  name: name,

})
  .then(g => message.channel.send(`Changed guild name to ${g}`))
  .catch(console.error);
}
