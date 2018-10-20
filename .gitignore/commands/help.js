const Discord = require('discord.js');
const infos = require('./infos.json');
const cmds = require('./commands.json');

exports.run = (client, message, args, ops) => {
    if(message.author.id === infos.owners.MTG || infos.owners.Xeno) {
        const ownerembed = new Discord.RichEmbed()
        .setTitle(`Help requested by **${message.author.username}**`)
        .setURL('https://google.com/')
        .setColor('#329FFE')
        .setThumbnail(message.author.avatarURL)
        .addField('Basics', `\`${cmds.Basics}\``)
        .addField('Fun', `\`${cmds.Fun}\``)
        .addField('Music', `\`${cmds.Music}\``)
        .addField('Moderation', `\`${cmds.Moderation}\``)
        .addField('Others', `\`${cmds.Others}\``)
        .addField('Dev cmds', `\`${cmds.Dev}\``)
        .setTimestamp()
        .setFooter(infos.version, client.user.displayAvatarURL)

    message.channel.send(ownerembed);

    } else {
        const embed = new Discord.RichEmbed()
        .setTitle(`Help requested by **${message.author.username}**`)
        .setURL('https://google.com/')
        .setColor('#329FFE')
        .setThumbnail(message.author.avatarURL)
        .addField('Basics', `\`${cmds.Basics}\``)
        .addField('Fun', `\`${cmds.Fun}\``)
        .addField('Music', `\`${cmds.Music}\``)
        .addField('Moderation', `\`${cmds.Moderation}\``)
        .addField('Others', `\`${cmds.Others}\``)
        .setTimestamp()
        .setFooter(infos.version, client.user.displayAvatarURL)

    message.channel.send(embed);
    }
}
