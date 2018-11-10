const base64 = require("js-base64").Base64;
const Discord = require('discord.js')
const infos = require('./infos.json')

module.exports.run = async (bot, message, args) => {
    const error = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setTitle('An error occured')
        .setColor('#EC1C1C')
        .setDescription(`No args`)
        .setFooter(infos.version, client.user.displayAvatarURL)
   
    const b64Decoded = base64.decode(args.join(" "));
    
    if(!b64Decoded) return message.channel.send('Please write something')
    
    message.channel.send(`\`\`\`\n${b64Decoded}\`\`\``);

    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!b64decode` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Input:`, `\`${args.join(' ')}\``)
    .addField(`Output:`, `\`${b64Decoded}\``)
    .setThumbnail(message.author.avatarURL)


client.channels.get('503494406264061963').send({embed: embed2});
    
}
