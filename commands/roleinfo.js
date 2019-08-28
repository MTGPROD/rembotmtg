const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find("name", args.join(" ")) 
  
  if(!args[0]) return message.channel.send("```\nUsage: r!role <roleResovable*>\nExample: r!role @Members\n\n*The roleResovable can be: @role, role, 609367779522510848\n\nGet more informations about a role.```")
  if(!role) return message.channel.send("I can't find the role.")
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Roleinfo")
  .addField("Name", role.name)
  .addField("ID", role.id)
  .addField("hex Color (b10 color)", `${role.hexColor} (${role.color})`)
  .addField("Createt At", role.createdAt)
  .addField("@role", `<@&${role.id}>`)
  .addField("Members", role.members.size)
  .addField("Mentionable", role.mentionable+" (true = mentionable, false = not mentionable)")
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL)
  message.channel.send(embed)
}

exports.help = {
  name: "roleinfo", 
  aliases: []
}