const Discord = require('discord.js');
const infos = require('./infos.json');

exports.run = (client, message, args, ops) => {
    let feed = args.join(' ')
    let author = message.author.username;
    
    const embed = new Discord.RichEmbed()
        .setTitle('Report by ' + author)
        .setDescription(feed)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor(infos.color)
        .addField(`Channel`, `#${message.channel.name} ID:(${message.channel.id})`)
        .addField(`Server`, `${message.guild.name}`)
        .setFooter(`Report by ${message.author.username} with ID:(${message.author.id})`)
    
    let msg = client.channels.get('502953123883778059').send(embed)

    message.react('✅')
    message.react('📨')
    msg.react('✅')
    msg.react('❌')
    
}
