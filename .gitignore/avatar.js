const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
 
    const embed = new Discord.RichEmbed()
        .setTitle(`**${target.username}'s** avatar !`)
        .setURL(target.avatarURL)
        .setDescription(`[🔗](${target.avatarURL})`)
        .setImage('https://cdn.discordapp.com/attachments/503494406264061963/508315779993829427/Double_Ring-1s-200px.gif')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)

    await message.channel.send({embed: embed}).then(msg => {
        let target = message.mentions.members.first() || message.author;
        
        setTimeout(() => {
         embed.setURL(target.avatarURL)
         embed.setColor('RANDOM')
         embed.setImage(target.avatarURL)
         msg.edit({embed: embed})

        }, 2 * 1000)
    })

    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!avatar` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Target:`, `\`${target}\``) 
    .setThumbnail(target.avatarURL)


bot.channels.get('503494406264061963').send({embed: embed2});
    
}

exports.help = {
    name: 'avatar',
    aliases: ['av']
}