const Discord = require('discord.js');
const infos = require('../databases/infos.json');

exports.run = (bot, message, args) => {
    const embed = new Discord.RichEmbed()
        .addField('Invite', '[Invitation](https://discordapp.com/oauth2/authorize?client_id=488734399509168148&scope=bot&permissions=2146958847)')
        .addField('Support server', "[Rem Support](https://discord.gg/AJzEv4t)", true)
        .addField('Donate', 'Not available', true)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setColor('#36393F')
        .setFooter(infos.version, bot.user.displayAvatarURL);

    message.channel.send(embed);

    let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!invite` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .setThumbnail(message.author.avatarURL)

    bot.channels.get('503494406264061963').send(embed2) 
                                            
}
  
  exports.help = {name: "invite", aliases: ['inv']} 