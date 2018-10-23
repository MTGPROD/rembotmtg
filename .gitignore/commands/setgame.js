const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {
    let game = args[0]
    let status = args[1]

    client.user.setPresence({ game: { name: game }, status: status })
  .then(console.log)
  .catch(console.error)
}
