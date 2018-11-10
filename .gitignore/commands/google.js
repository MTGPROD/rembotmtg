const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    
    if(!args.join(` `)) return message.channel.send('Please provide a search term !')

    message.delete()
    const embed = new Discord.RichEmbed()
        .setDescription(`[**${args.join(' ')}**](https://google.fr/#q=${args.join('%20')})`)

    message.channel.send({embed: embed});
    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!google` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${args.join(' ')}\``) 
    .addField(`Search:`, `\`${message.content}\``)
    .setThumbnail(message.author.avatarURL)
  
  client.channels.get('503494406264061963').send({embed: embed2});
}
