const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    let url = args[0]
    let name = args[1]

    if(!url) return message.channel.send('Please input a URL.')
    if(!name) return message.channel.send('Please input a name.')


    message.guild.createEmoji(url, name)
  .then(emoji => message.channel.send(`Created new emoji :${emoji.name}:`))
  .catch(console.error);
}
