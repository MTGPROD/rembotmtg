const Discord = require("discord.js");
const infos = require('./infos.json');

exports.run = async (client, message, args, ops) => {
    let target = message.mentions.users.first() || message.author;
    
    const embed = new Discord.RichEmbed()
        .setTitle(`Profile of ${target}`)
        .addField(`Name:`, `${target.username}`)
        .addField(`ID:`, `${target.id}`)
        
        .addField(`Discriminator`, `#${target.discriminator}`)
    
    message.channel.send(embed);
    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!me` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content/*66*/:`, `\`${message.content}\``)
    .setThumbnail(mess
    
    .setThumbnail(message.author.avatarURL)


client.channels.get('503494406264061963').send(embed2);
}
