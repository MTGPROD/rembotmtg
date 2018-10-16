const Discord = require('discord.js');
const color = '#329FFE';

exports.run = async (client, message, args, tools) => {
    let msg = await message.channel.send("Loading...")
    let target = message.mentions.users.first() || message.author;
 
    const embed = new Discord.RichEmbed()
        .setTitle(`**${target.username}'s** avatar !`)
        .setURL('https://google.com')
        .setColor(color)
        .setImage(target.avatarURL)
        .setFooter(`Requested by ${message.author.username}`)

    await message.channel.send({embed: embed});
    
    msg.delete();
}
