const Discord = require("discord.js");
const superagent = require("superagent");
const infos = require('./infos.json');

exports.run = async (client, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("You are so alone...");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`\`${message.author.username}\` kissed \`${message.mentions.users.first().username}\` !`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter(infos.version, client.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}
