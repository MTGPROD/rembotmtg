const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setDescription(':ping_pong: pong')

    message.channel.send({embed: embed})
}