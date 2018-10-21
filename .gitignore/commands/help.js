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

let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!help` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID`, `\`${message.guild.id}\``)
    .addField(`Guild Name`, `\`${message.guild.name}\``)
    .addField(`Full content`, `\`${message.content}\``) 
  
  client.channels.get('503494406264061963').send(embed2);
}
