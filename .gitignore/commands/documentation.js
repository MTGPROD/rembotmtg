const Discord = require("discord.js");
const list = require('./commands.json');

exports.run = async (client, message, args) => {
   let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .setDescription(`Please write the name of the command, you have the choice between all these commands:\n\n EX: \`r!docu avatar\` \n${list.Basics}\n${list.Fun}\n${list.Music}\n${list.Games}\n${list.Moderation}\n${list.Others}`)

    message.channel.send({embed: embed})
};
