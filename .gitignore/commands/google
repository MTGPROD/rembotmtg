const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    
    if(!args.join(' ')) return message.channel.send('Please provide a search term !')

    message.delete()
    const embed = new Discord.RichEmbed()
        .setDescription(`[**${args.join(' ')}**](https://google.fr/#q=${args.join('%20')})`)

    message.channel.send({embed: embed});
}
