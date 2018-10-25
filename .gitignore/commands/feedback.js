const Discord = require('discord.js');
const infos = require('./infos.json');

exports.run = (client, message, args, ops) => {
    let feed = args.join(' ')
    let author = message.author.username;
    
    if(!feed) return messagz.react('❌')
    
    const embed = new Discord.RichEmbed()
        .setTitle('Feedback by ' + author)
        .setDescription(feed)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor(infos.color)
        .addField(`Channel`, `#${message.channel.name} ID:(${message.channel.id})`)
        .addField(`Server`, `${message.guild.name}`)
        .setFooter(`FeedBack by ${message.author.username} with ID:(${message.author.id})`)
    
    client.channels.get('502191191216095242').send(embed)

    message.react('✅')
    message.react('📨')
    
}
