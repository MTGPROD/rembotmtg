const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {
    let region = args.join(` `)
    let msghelp = 'Usage: r!setregion `japan`, `singapore`, `eu-central`, `us-central`, `london`, `eu-west`, `amsterdam`, `brazil`, `us-west`, `hongkong`, `us-south`, `southafrica`, `us-east`, `sydney`, `frankfurt`, `russia`'
    if(!region) message.channel.send(msghelp)

    if(!region === 'japan') return message.channel.send(msghelp)
    if(!region === 'singapore') return message.channel.send(msghelp)
    if(!region === 'eu-central') return message.channel.send(msghelp)
    if(!region === 'us-central') return message.channel.send(msghelp)
    if(!region === 'london') return message.channel.send(msghelp)
    if(!region === 'eu-west') return message.channel.send(msghelp)
    if(!region === 'amsterdam') return message.channel.send(msghelp)
    if(!region === 'brazil') return message.channel.send(msghelp)
    if(!region === 'us-west') return message.channel.send(msghelp)
    if(!region === 'hongkong') return message.channel.send(msghelp)
    if(!region === 'us-south') return message.channel.send(msghelp)
    if(!region === 'southafrica') return message.channel.send(msghelp)
    if(!region === 'us-east') return message.channel.send(msghelp)
    if(!region === 'sydney') return message.channel.send(msghelp)
    if(!region === 'frankfurt') return message.channel.send(msghelp)
    if(!region === 'russia') return message.channel.send(msghelp)

    message.guild.setRegion(region)
 .then(g => message.channel.send(`Updated guild region to \`${g.region}\``))
 .catch(console.error);
}
