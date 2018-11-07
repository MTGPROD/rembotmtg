/*.setDescription(`[Link](${message.author.avatarURL})`)*/
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let target = message.mentions.users.first() || message.guild.members.get(args[0])
 
    const embed = new Discord.RichEmbed()
        .setTitle(`**${target.username}'s** avatar !`)
        .setDescription(`[**Link**](${message.author.avatarURL})`)
        .setImage('https://cdn.discordapp.com/attachments/503494406264061963/508315779993829427/Double_Ring-1s-200px.gif')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)

    await message.channel.send({embed: embed}).then(msg => {
        let target = message.mentions.users.first() || message.author;
        
        setTimeout(function() {
         embed.setURL('https://google.com')
         embed.setColor('RANDOM')
         embed.setImage(target.avatarURL || message.author.avatarURL)
         msg.edit({embed: embed})

        }, 1500)
    })

    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!avatar` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Target:`, `\`${target}\``) 
    .setThumbnail(target.avatarURL)


client.channels.get('503494406264061963').send(embed2);
    
}

