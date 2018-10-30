const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args, ops) => {
    randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });

    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!memes` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID`, `\`${message.guild.id}\``)
    .addField (`Channel`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Guild Name`, `\`${message.guild.name}\``)
    .addField(`Full content`, `\`${message.content}\``)
    .addField(`URL`, `\`${url}\``)
    .setThumbnail(message.authoravatarURL)


client.channels.get('503494406264061963').send(embed2
                                              );
}
