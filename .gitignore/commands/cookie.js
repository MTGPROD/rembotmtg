const Discord = require('discord.js')
const help = require('./help.json')

exports.run = (client, message, args, ops) => {
    let target = message.mentions.members.first()

if(target.id === message.author.id) return message.channel.send('You can\'t give yourself a cookie. <a:wegif:490534072892784650>')

if(!args[0]) return message.channel.send(`\`\`\`
${help.cmds_help_cookie}
\`\`\``)

    const embed = new Discord.RichEmbed()
        .setDescription(`Gave you a :cookie: to **${target}**`)
    message.channel.send(embed)


  let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!animes` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .setColor('#36393F')
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Anime research:`, `\`${args}\``)
    .setThumbnail(message.author.avatarURL)


client.channels.get('503494406264061963').send({embed: embed2});
}
