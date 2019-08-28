const Discord = require('discord.js')

exports.run = (client, message, args) => {
  const banned = message.mentions.members.first() || message.guild.members.get(args[0]) //|| message.guild.members.find("username", args[0])
  var reason = "Aucune raison donné."
  if(!args[0]) return message.channel.send('```\nUsage: r!ban @mention | <id>\nExemple: r!ban @MTG | 234234723314958339\n\nBan a member.```')  
  if(!banned) return message.channel.send("I can't find this user, please retry.")
  if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You don't have the permission to ban. (`BAN_MEMBERS`)") 
  if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I don't have the permission to ban. (`BAN_MEMBERS`)")  
  if(!banned.bannable) return message.channel.send("I can't ban this user.")

    reason = args.join(" ").slice(args[0].length)
  
  banned.ban()
  message.channel.send(`**${banned.user.username}#${banned.user.discriminator}** has been banned, by **${message.member.user.username}#${message.member.user.username}** for **${reason}**`)
} 

exports.help = {
  name: "ban",
  aliases: []
} 