const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {
    let region = args.join(' ')
    if(!region) message.channel.send('Usage: r!setregion japan/singapore/eu-central/us-central/london/eu-west/amsterdam/brazil/us-west/hongkong/us-south/southafrica/us-east/sydney/frankfurt/russia')

    message.guild.setRegion(region)
 .then(g => message.channel.send(`Updated guild region to ${g.region}`))
 .catch(console.error);
}
