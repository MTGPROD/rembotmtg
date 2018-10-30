const Discord = require('discord.js');
const infos = require('./infos.json');
const client = new Discord.Client()

exports.run = (client, message, args, ops) => {
    const embed = new Discord.RichEmbed()
        .addField('Invite me:', '[Invitation](https://discordapp.com/oauth2/authorize?client_id=488734399509168148&scope=bot&permissions=2146958847)')
        .addField('My server:', "[MTG's dev](https://discord.gg/2qJjJcs)")
        .setThumbnail(client.user.displayAvatarURL)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(infos.version, client.user.displayAvatarURL);

    message.channel.send(embed);

    let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!invite` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .setThumbnail(message.author.avatarURL)


    client.channels.get('503494406264061963').send(embed2);
}
