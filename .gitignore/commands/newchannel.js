const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    let name = args[0]
    let type = args[1]

    if(!name) return message.channel.send('Please input a name')
    if(!type) return message.channel.send('Please input a type `text/voice/category`')

m
    message.guild.createChannel(name, type)

    message.channel.send('Channel created')
    
    
        
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!newchannel` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID`, `\`${message.guild.id}\``)
    .addField(`Guild Name`, `\`${message.guild.name}\``)
    .addField(`Channel`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content`, `\`${message.content}\``)
    
    .setThumbnail(message.author.avatarURL)


client.channels.get('503494406264061963').send(embed2);
}
