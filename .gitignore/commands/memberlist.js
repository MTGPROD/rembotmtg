const Discord = require('discord.js')

exports.run = async (client, message, args, ops) => {

    var members = message.guild.members.array().join('\n')
    
    

    

    const embed = new Discord.RichEmbed()

        .setDescription(members)

    message.channel.send(embed)
    
       let embed2 = new Discord.RichEmbed()     .setTitle('Commande `r!memberlist`  a été utilisée !')     .addField(`User:`, `\`${message.author.username}\``)     .addField(`ID:`, `\`${message.author.id}\``)     .setColor('#36393F')     .addField(`Discrinator:`, `\`${message.author.discriminator}\``)     .addField(`Created At:`, `\`${message.author.createdAt}\``)     .addField(`GuildID:`, `\`${message.guild.id}\``)     .addField(`Guild Name:`, `\`${message.guild.name}\``)     .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)     .addField(`Full content:`, `\`${message.content}\``)     .addField(`Anime research:`, `\`${args}\``)     .setThumbnail(message.author.avatarURL)  
client.channels.get('503494406264061963').send({embed: embed2});

}
