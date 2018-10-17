const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args, ops) => {
    randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });

}
