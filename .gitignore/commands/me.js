const Discord = require("discord.js");
const superagent = require("superagent");
const infos = require('./infos.json');

exports.run = async (client, message, args) => {
    let target = message.mentions.first() || message.author;
    
    const embed = Discord.RichEmbed()
        .setTitle(`Profile of ${target}`)
        .addField(`Name`, `${target.username}`)

    message.channel.send(embed);
}
