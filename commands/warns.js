const Discord = require('discord.js')
const Enmap = require("enmap")

exports.run = (client, message, args) => {
  
  const member = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!member) return message.channel.send("I can't find this member")
  const key = `${message.author.id}-${message.guild.id}`
  const member_key = `${member.id}-${member.guild.id}`
  var textFinal = ""
  
 if(!message.member.permissions.has("KICK_MEMBERS", "BAN_MEMBERS")) return message.channel.send("You can't warn members, `KICK_MEMBERS` and/or `BAN_MEMBERS` permissions are missing.")
  for(var i = 0; i < client.shareholders.getProp(member_key, "warns").length; i++) {
     textFinal += `[\`${i+1}\`](https:/f.f) ${client.shareholders.getProp(member_key, `warns.${i}`)}\n`
  }
  const mainEmbed = new Discord.MessageEmbed().setAuthor(`Warns of ${member.user.username}#${member.user.discriminator}`, member.user.displayAvatarURL).setDescription(textFinal)
   message.channel.send(mainEmbed)
                              
   
}

exports.help = {
  name: "warns",
  aliases: ["warnings"]
}