const Discord = require('discord.js')

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setDescription(args.join(" "))
  message.channel.send(embed)
}

exports.help = {
  name: "embed",
  aliases: []
}