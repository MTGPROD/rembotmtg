const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    var text = args.join(` `)

    if(!text) return;
    if(!text === 'online') return message.channel.send('Nope.')
    if(!text === 'idle') return message.channel.send('Nope.')
    if(!text === 'dnd') return message.channel.send('Nope.')
    if(!text === 'invisible') return message.channel.send('Nope.')

    client.user.setStatus(text)
}