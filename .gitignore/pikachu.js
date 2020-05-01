const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (bot, message, args) => {
    randomPuppy('pikachu')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('#36393F')
        message.channel.send(embed);
    });

      
 let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!pikachu` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .setColor('#36393F')
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .setThumbnail(message.author.avatarURL)

bot.channels.get('503494406264061963').send(embed2);

}

exports.help = {name: "pikachu", aliases: ['pika']} 
                                        