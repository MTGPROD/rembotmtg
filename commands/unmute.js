const Discord = require("discord.js") 
var missing = new Discord.MessageEmbed().setTitle(":x: Missing Permissions") 
exports.run = (client, message, args) => {
  const muted = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!message.member.permissions.has("MANAGE_CHANNELS", "MANAGE_ROLES")) {
     missing.setDescription("You haven't the [`MANAGE_CHANNELS`](https://g.g) or/and [`MANAGE_ROLES`](https://c.v) permission. Retry")
     message.channel.send(missing)
  } 
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS", "MANAGE_ROLES")) { 
    missing.setDescription("I haven't the [`MANAGE_CHANNELS`](https://f.f) or/and [`MANAGE_ROLES`](https://f.f) permission. Retry")
    message.channel.send(missing)
  } 
  if(muted.roles.has(message.guild.roles.find("name", "Rem Muted"))) return message.channel.send("This member is not muted.")
  if(!message.guild.roles.find("name", "Rem Muted")) return message.channel.send("I can't find the `Rem Muted` role. Please use `r!mute` to configure the role.")
  var reason = args.join(" ").slice(args[0].length)
  muted.removeRole(message.guild.roles.find("name", "Rem Muted"))
  const response = new Discord.MessageEmbed().setTitle("unmute").setDescription(`[${muted.user.username}#${muted.user.discriminator}](https://c.c) has been unmuted by [${message.author.username}#${message.author.discriminator}](https://t.p.d) for ${reason}`) 
  message.channel.send(response)
  
}  

exports.help = {
  name: "unmute",
  aliases: []
}   