const Discord = require('discord.js')

exports.run = (client, message, args) => {
   const kicked = message.mentions.members.first() || message.guild.members.get(args[0])
   var reason = "No reason."
   if(!args[0]) return message.channel.send("```\nUsage: +kick @mention | <id>\nExemple: +kick @MTG | 355393369146523648\n\nKick an user from your server.```")
   if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You can't kick members. (`KICK_MEMBERS` permission is missing)") 
   if(!kicked.kickable) return message.channel.send("I can't kick this member.") 
   reason = args.join(" ").slice(args[0].length)
   kicked.kick()
   message.channel.send(`${kicked.user.username}#${kicked.user.discriminator} has been kicked, by **${message.author.username}#${message.author.discriminator}** for **${reason}**`) 
} 

exports.help = {
  name: "kick",
  aliases: []
} 