const Discord = require("discord.js");
const list = require('./commands.json');

exports.run = async (client, message, args) => {
   let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .setDescription(`Please write the name of the command, you have the choice between all these commands:\n\n EX: \`r!docu avatar\` \n${list.Basics}\n${list.Fun}\n${list.Music}\n${list.Games}\n${list.Moderation}\n${list.Others}`)

    message.channel.send({embed: embed})
   
   let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!documentation` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``) 
    .setThumbnail(message.author.avatarURL)
  
  client.channels.get('503494406264061963').send(embed2);
};
