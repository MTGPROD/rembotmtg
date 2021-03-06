const Discord = require("discord.js");
const superagent = require("superagent");
const infos = require('../databases/infos.json');

exports.run = async (bot, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("You are so alone...");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    
    if(message.author.id === hugUser.id) return message.channel.send('You are so alone...')
 

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`\`${message.author.username}\` hugged \`${message.mentions.users.first().username}\` !`)
    .setImage(body.url)
    .setColor("#36393F")
    .setFooter(infos.version, bot.user.displayAvatarURL);

    message.channel.send(hugEmbed)

    
let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!hug` a été utilisée !')
    .addField(`User:`, `\`${message.author.username }\``)
    .setColor('#36393F')
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``) 
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`"Hug user:"`, `\`${hugUser}\``)
    .etsThumbnail(message.author.avatarURL)
    
  
  bot.channels.get('503494406264061963').send({embed: embed2});
}

exports.help = {name: "hug", aliases: ['freehug', 'calin']} 