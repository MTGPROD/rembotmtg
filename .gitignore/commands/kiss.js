const Discord = require("discord.js");
const superagent = require("superagent");
const infos = require('./infos.json');

exports.run = async (client, message, args) => {

    let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kissUser) return message.channel.send("You are so alone...");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);
    
     if(message.author.id === kissUser.id) return message.channel.send('You are so alone...')

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`\`${message.author.username}\` kissed \`${message.mentions.users.first().username}\` !`)
    .setImage(body.url)
    .setColor("#36393F")
    .setFooter(infos.version, client.user.displayAvatarURL);

    message.channel.send(hugEmbed)

    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!kiss` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Kiss user:`, `\`${kissUser}\``)
    .setThumbnail(message.author.avatarURL)


client.channels.get('503494406264061963').send({embed: embed2});

}
