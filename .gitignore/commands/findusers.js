const Discord = require("discord.js");

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
        .setFooter('Rem 2.0')

    message.channel.send({embed: embed})    
    
}
