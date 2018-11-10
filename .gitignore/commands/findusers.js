const Discord = require("discord.js");
const infos = require('./infos');

exports.run = async (client, message, args) => {
    let users = client.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please provide me a search term.");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const embed = new Discord.RichEmbed()
    	.setTitle('Results')
    	.setURL('https://google.com/')
        .setDescription(`\`${matches.map(u => u.tag).join("\n")}\``)
        .setTimestamp()
        .setColor('#329FFE')
        .setFooter(infos.version, client.user.displayAvatarURL)

    message.channel.send({embed: embed})   
    
    let embed2 = new Discord.RichEmbed()
                .setTitle('Commande `r!findusers` a été utilisée !')
                .addField(`User:`, `\`${message.author.username}\``)
                .addField(`ID:`, `\`${message.author.id}\``)
                .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
                .addField(`Created At:`, `\`${message.author.createdAt}\``)
                .addField(`GuildID:`, `\`${message.guild.id}\``)
                .addField(`Guild Name:`, `\`${message.guild.name}\``)
                .addField(`Full content:`, `\`${message.content}\``) 
                .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
                .addField(`Find:`, `\`${matches.map(u => u.tag).join("\n")}\``) 
                .addField(`Search term:`, `\`${searchTerm}\``)
              
              client.channels.get('503494406264061963').send({embed: embed2});
    
}
