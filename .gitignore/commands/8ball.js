const Discord = require('discord.js');
const infos = require('./infos.json');

exports.run = async (client, message, args, tools) => {
    
    // Array of responses
    let responses = [
        'Agreed!',
        'Of Course!',
        'Nope.',
        'No',
        'Maybe',
        'One day...',
        'Don\'t see that happening!',
        'I have no idea'
    ]
    
    
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(fetched)
        .setFooter(infos.version, client.user.displayAvatarURL);
    
    message.channel.send(embed);
    
}
