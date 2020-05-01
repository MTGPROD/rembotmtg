const Discord = require("discord.js")

exports.run = (client, message, args) => {
		message.delete()
		message.channel.send(args.join(" "))
}
module.exports.help = {
    name: 'say',
    aliases: []
};