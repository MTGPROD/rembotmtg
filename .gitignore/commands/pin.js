const Discord = require('discord.js')
const help = require('./JSON/help.json')

exports.run = (client, message, args) => {
if(!args[0]) return message.channel.send(```\n${help.cmds_help_pin}```)

message.channel.fetchMessage(args[0]).then(msg => msg.pin())
}