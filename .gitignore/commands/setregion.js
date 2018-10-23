const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {
    let region = args.join(' ')

    message.guild.setRegion(region)
 .then(g => message.channel.send(`Updated guild region to ${g.region}`))
 .catch(console.error);
}
