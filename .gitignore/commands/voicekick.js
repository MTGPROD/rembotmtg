const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
    let abo = message.mentions.members.first()

    message.guild.createChannel('kick', 'voice').then(channel => {
        try {
            abo.setVoiceChannel(channel)
            abo.setVoiceChannel(channel)
            channel.delete()
            message.react('👢')
        } catch(e) {
            console.log(e.stack)
            /*message.react('❌')*/
            channel.delete()
        }
    })
}
