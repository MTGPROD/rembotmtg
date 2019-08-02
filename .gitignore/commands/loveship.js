const Discord = require('discord.js')

exports.run = (client, message, args) => {
var target = message.mentions.users.first() 

let fetched = Math.floor(Math.random() * 100)

const mainEmbed = new Discord.RichEmbed() 
     .setTitle(`Loveship ❤️-❤️`)
     .setColor('#ffbaf0')
     .setDescription(`**${message.author.username}** ${fetched}% **${target.username}** `)
message.channel.send(mainEmbed) 
     
        let embed2 = new Discord.RichEmbed()     .setTitle('Commande `r!loveship` a été utilisée !')     .addField(`User:`, `\`${message.author.username}\``)     .addField(`ID:`, `\`${message.author.id}\``)     .setColor('#36393F')     .addField(`Discrinator:`, `\`${message.author.discriminator}\``)     .addField(`Created At:`, `\`${message.author.createdAt}\``)     .addField(`GuildID:`, `\`${message.guild.id}\``)     .addField(`Guild Name:`, `\`${message.guild.name}\``)     .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)     .addField(`Full content:`, `\`${message.content}\``)     .addField(`Anime research:`, `\`${args}\``)     .setThumbnail(message.author.avatarURL)  
client.channels.get('503494406264061963').send({embed: embed2});
} 
