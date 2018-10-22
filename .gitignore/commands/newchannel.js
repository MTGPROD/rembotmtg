const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    let name = args[0]
    let type = args[1]

    if(!name) return message.channel.send('Please input a name')
    if(!type) return message.channel.send('Please input a type `text/voice`')


    message.guild.createChannel(name, type)

    message.channel.send('Channel created')
}
