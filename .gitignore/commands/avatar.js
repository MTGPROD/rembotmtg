const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let msg = await message.channel.send("**<a:Load:491296766835294208> Loading...**")
    let target = message.mentions.users.first() || message.author;
 
    const embed = new Discord.RichEmbed()
        .setTitle(`**${target.username}'s** avatar !`)
        .setDescription(`[Link](${message.author.avatarURL})`)
        .setColor('RANDOM')
        .setImage(target.avatarURL)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)

    await message.channel.send(embed);
    
    msg.delete();

    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!avatar` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Target:`, `\`${target}\``) 
    .setThumbnail(target.avatarURL)


client.channels.get('503494406264061963').send(embed2);
    
}
