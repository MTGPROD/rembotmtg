const Discord = require('discord.js')
const osu = require('node-osu')
const help = require('./help.json')

var osuApi = new osu.Api('51d40a4520dbde1bb63a203db8ccdba7a9690d50', {
    // baseUrl: sets the base api url (default: https://osu.ppy.sh/api)
    notFoundAsError: true, // Reject on not found instead of returning nothing. (default: true)
    completeScores: false // When fetching scores also return the beatmap (default: false)
})

exports.run = (client, message, args) => {
    //https://lemmmy.pw/osusig/sig.php?colour=hexBC0EC8&uname=MTGPROD&mode=0&pp=0&onlineindicator=undefined&xpbar

    var mode = 0;
    var username = args[0]

if(!args[0]) return message.channel.send(`\`\`\`
${help.cmds_help_osu}
\`\`\``)

    if(args[0] === 'mania') {
        mode = 3
        username = args[1]
        if(!args[1]) return message.channel.send('Please specify the username')
    }

    if(args[0] === 'ctb') {
        mode = 2
        username = args[1]
        if(!args[1]) return message.channel.send('Please specify the username')
    }

    if(args[0] === 'CTB') {
        mode = 2
        username = args[1]
        if(!args[1]) return message.channel.send('Please specify the username')
    }

    if(args[0] === 'taiko') {
        mode = 1
        username = args[1]
        if(!args[1]) return message.channel.send('Please specify the username')
    }

    const embed = new Discord.RichEmbed()
        .setColor(message.member.highestRole.hexColor)
        .setImage(`https://lemmmy.pw/osusig/sig.php?colour=hex${message.member.highestRole.hexColor.slice(1)}&uname=${username}&mode=${mode}&pp=0&onlineindicator=undefined&xpbar`)
    message.channel.send(embed)
}
