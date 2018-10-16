const Discord = require('discord.js');
const prefix = 'r!'

exports.run = (client, message, args, ops) => {
    const embed = new Discord.RichEmbed()
        .setTitle(`Help requested by ${message.author.username}`)
        .setThumbnail(message.author.avatarURL)
        .addField('Basics', `${prefix}ascii <text>\n${prefix}avatar\n${prefix}calc\n${prefix}cat\n${prefix}color\n${prefix}colors\n${prefix}findusers\n${prefix}help\n${prefix}ping\n${prefix}poll\n${prefix}purge\n${prefix}spotify`)
        .addBlankField(true)
        .addField('Music', `${prefix}play\n${prefix}search\n${prefix}leave\n${prefix}pause\n${prefix}resume\n${prefix}volume\n${prefix}queue`)
        .setFooter(`Rem 2.0`)

    message.channel.send({embed: embed});
}
