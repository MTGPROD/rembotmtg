const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    var text = args.join(` `)
    message.delete()
    message.channel.send(text)
}
