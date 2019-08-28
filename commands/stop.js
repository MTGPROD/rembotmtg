const Discord = require("discord.js")

exports.run = (client, message, args) => {
  message.react("☑")
  client.destroy()
}

exports.help = {
  name: "stop", 
  aliases: []
}