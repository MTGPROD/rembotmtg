const Discord = require('discord.js');
const infos = require('./infos.json');

exports.run = (client, message, args, ops) => {
    let feed = args.join(' ')
    let author = message.author.username;
    
    
   if(!feed) return message.react('❌')
   if(feed.length < 10) return message.react('❌')
    
    const embed = new Discord.RichEmbed()
        .setTitle('Suggestion by ' + author)
        .setDescription(feed)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor(infos.color)
        .addField(`Channel`, `#${message.channel.name} ID:(${message.channel.id})`)
        .addField(`Server`, `${message.guild.name}`)
        .setFooter(`FeedBack by ${message.author.username} with ID:(${message.author.id})`)
    
    let msg = client.channels.get('503548843766579200').send(embed)

    message.react('✅')
    message.react('📨')
    msg.react('✅')
    msg.react('❌')
    
     let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!suggestion` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID`, `\`${message.guild.id}\``)
        .addField(`Guild Name`, `\`${message.guild.name}\``)
        .addField(`Full content`, `\`${message.content}\``)


    client.channels.get('503494406264061963').send(embed2);
    
}
