const Discord = require("discord.js")
const Enmap = require('enmap')

exports.run = (client, message, args) => {
  
var key = `${message.author.id}-${message.guild.id}`
var member = message.mentions.members.first() || message.guild.members.get(args[0])
var member_key = `${member.id}-${member.guild.id}`
var reason = args.join(" ").slice(args[0].length)
  
if(!message.member.permissions.has("BAN_MEMBERS", "KICK_MEMBERS")) return message.channel.send("You can't warn members, `BAN_MEMBERS` and/of `KICK_MEMBERS` permissions are missing.")
if(!args[0]) return message.channel.send("```\nUsage: r!warn @mention | <id> <reason>\nExample: r!warn @MTG | 239863945103529364 Stop your spam !\n\nWarn a member if he against the rules of your server.```")
if(!member) return message.channel.send(":x: I can't find the member\n```\nUsage: r!warn @mention | <id> <reason>\nExample: r!warn @MTG | 239863945103529364 Stop your spam !!\n\nWarn a member if he against the rules of your server.```") 
                                        
client.shareholders.ensure(key, { name: message.author.username, tag: message.author.discriminator, id: message.author.id, warns: [] })
client.shareholders.ensure(member_key, { name: member.user.username, tag: member.user.discriminator, id: member.id, warns: []})

client.shareholders.push(member_key, `by **${message.author.username}#${message.author.discriminator}** for **${reason}**`, "warns")
message.channel.send(`**${member.user.username}#${member.user.discriminator}** has been warned by **${message.author.username}#${message.author.discriminator}** for **${reason}**`)
  
} 

exports.help = {
  name: "warn",
  aliases: ["avertir"]
}