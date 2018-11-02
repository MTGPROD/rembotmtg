const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
    var name = args[0]
    var link = args[1]
    var description = args[2]

    if(!name) return message.channel.send(`Please input a name !`)
    if(!link) return message.channel.send(`Please input a link !`)

    const embed = new Discord.RichEmbed()
        .setDescription(`[${name}](${link}) \n ${description}`)

    message.channel.send({embed: embed});
}
