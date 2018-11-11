const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
    let abo = message.mentions.members.first()

    message.guild.createChannel('kick', 'voice').then(channel => {
        try {
            abo.setVoiceChannel(channel)
            channel.delete()
        } catch(e) {
            console.log(e.stack)
            channel.delete()
        }
    })
}
