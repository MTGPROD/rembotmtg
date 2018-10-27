const Discord = require("discord.js");
const infos = require('./infos.json');

exports.run = async (client, message, args, ops) => {
    let target = message.mentions.users.first() || message.author;
    
    const embed = new Discord.RichEmbed()
        .setTitle(`Profile of ${target}`)
        .addField(`Name:`, `${target.username}`)
        .addField(`ID:`, `${target.id}`)
        
        .addField(`Discriminator`, `#${target.discriminator}`)
    message.channel.send(embed);
}
