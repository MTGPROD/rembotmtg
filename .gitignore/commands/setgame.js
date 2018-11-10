const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {

  if(message.author.id === '234234723314958339') {
    client.user.setGame(args.join(` `))
  .then(console.log)
  .catch(console.error)
  } else {
    message.channel.send('You are not authorized to use this command.')
  }

}
