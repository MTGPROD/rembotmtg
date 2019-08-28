const Discord = require('discord.js')

exports.run = (client, message, args) => {
  const unbanned = client.users.get(args[0])
  var reason = "No reason."
  if(!unbanned) return message.channel.send("```\nUsage: +unban <id>\nExemple: +unban 469907804568682496\n\nPermit to unban users.```")
  if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You dot not have the permission to unban. (`BAN_MEMBERS`)") 
  if(args[0]) {
    reason = args.join(" ").slice(args[0].length)
  }
  message.guild.unban(args[0])
  message.channel.send(`**${message.author.username}#${message.author.discriminator}** a unban **${args[0]}**, pour **${reason}**`)
} 

exports.help = {
  name: "unban", 
  aliases: ["pardon"]
} 