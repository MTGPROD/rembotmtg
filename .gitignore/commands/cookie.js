const Discord = require('discord.js')
const help = require('./help.json')

exports.run = (client, message, args, ops) => {
    let target = message.mentions.members.first()

if(target.id === message.author.id) return message.channel.send('You can\'t give yourself a cookie. <a:wegif:490534072892784650>')

if(!args[0]) return message.channel.send(`\`\`\`
${help.cmds_help_cookie}
\`\`\``)

    const embed = new Discord.RichEmbed()
        .setDescription(`Gave you a :cookie: to **${target}**`)
    message.channel.send(embed)
}
