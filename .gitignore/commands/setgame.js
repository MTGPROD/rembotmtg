const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {

  if(message.author.id === '234234723314958339') {
    let game = args[0]
    let status = args[1]

    client.user.setPresence({ game: { name: game }, status: status })
  .then(console.log)
  .catch(console.error)
  } else {
    message.channel.send('You are not authorized to use this command.')
  }

}
