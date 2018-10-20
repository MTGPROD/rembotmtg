const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let msg = await message.channel.send("<a:Load:491296766835294208> Loading...")
    let target = message.mentions.users.first() || message.author;
 
    const embed = new Discord.RichEmbed()
        .setTitle(`**${target.username}'s** avatar !`)
        .setURL('https://google.com')
        .setColor('RANDOM')
        .setImage(target.avatarURL)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)

    await message.channel.send(embed);
    
    msg.delete();
}
