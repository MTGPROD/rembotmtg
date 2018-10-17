const Discord = require('discord.js');
const prefix = 'r!'

exports.run = (client, message, args, ops) => {
    const embed = new Discord.RichEmbed()
        .setTitle(`Help requested by **${message.author.username}**`)
        .setURL('https://google.com/')
        .setColor('#329FFE')
        .setThumbnail(message.author.avatarURL)
        .addField('Basics', `${prefix}ascii <text>\n${prefix}avatar @user\n${prefix}calc <number +-*%/ number>\n${prefix}cat\n${prefix}color\n${prefix}colors\n${prefix}findusers\n${prefix}help\n${prefix}ping\n${prefix}poll\n${prefix}purge\n${prefix}spotify\n${prefix}csgo <user>\n${prefix}fornite\n`)
        .addBlankField(true)
        .addField('Music', `${prefix}play\n${prefix}search\n${prefix}leave\n${prefix}pause\n${prefix}resume\n${prefix}volume 0 - 200\n${prefix}queue`)
        .setTimestamp()
        .setFooter(`Rem 2.0`)

    message.channel.send({embed: embed});
}
