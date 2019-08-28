const Discord = require("discord.js")

exports.run = (client, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.get(args[0])
  const member_key = `${member.id}-${member.guild.id}`
  
  if(!member) return message.channel.send("I didn't find this user.")
  if(!args[1]) return message.channel.send(":x: Where is the ID of the warn ?```\nUsage: r!delwarn <@mention> <warnId>\nExample: r!delwarn @MTG 2\n\nDelete a warn.```")
  if(args[1].isNaN()) return message.channel.send(":x: Your argument is not a number") 
  console.log(args[1])
  console.log(member_key+"  "+member)
  try {
  client.shareholders.remove(member_key, args[1]-1, "warns")
  } catch(e) {
    console.error(e)
  }
  
  message.channel.send("wwarn deleted")
}

exports.help = {
  name: "delwarn",
  aliases: ["deletewarning"]
}