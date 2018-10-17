const Discord = require('discord.js');
const prefix = 'r!'

let basics = ['ping', 'botstats', 'post', 'purge']
let fun = ['8ball', 'ascii', 'b64encode', 'b64decode', 'calc', 'fortnite', 'csgo', 'animes', 'cat']
let specials = ['colors', 'color', 'poll', 'roleinfo']
let music = ['play', 'search', 'leave', 'pause', 'resume', 'volume', 'queue']
let modération = ['ban', 'unmute', 'mute', 'kick', 'unban']

exports.run = (client, message, args, ops) => {
    const embed = new Discord.RichEmbed()
        .setTitle(`Help requested by **${message.author.username}**`)
        .setURL('https://google.com/')
        .setColor('#329FFE')
        .setThumbnail(message.author.avatarURL)
        .addField('Basics', `\`${basics}\``)
        .addField('Fun', `\`${fun}\``)
        .addField('Specials', `\`${specials}\``)
        .addField('Music', `\`${music}\``)
        .addField('Modération', `\`${modération}\``)
        .setTimestamp()
        .setFooter(`Rem 2.0`)

    message.channel.send({embed: embed});
}
