const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    let url = args[0]
    let name = args[1]

    if(!url) return message.channel.send('Please input a URL.')
    if(!name) return message.channel.send('Please input a name.')


    message.guild.createEmoji(url, name)
  .then(emoji => message.channel.send(`Created new emoji :${emoji.name}:`))
  .catch(console.error);
    
        
 let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!newemoji` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .setThumbnail(message.author.avatarURL)

client.channels.get('503494406264061963').send(embed2);
}
