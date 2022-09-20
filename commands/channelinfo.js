const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let c = message.mentions.channels.first() || message.guild.channels.get(args[0]) || message.guild.channels.find("name", args[0])
  
  if(!args[0]) return message.channel.send("```\nUsage: r!channelinfo <channelResovable*>\nExample: r!channelinfo #super-duper-channel\n\n*Channel resovable can be: #channel, channel, 609113643740561408```")
  if(!c) return message.channel.send("I can't find the channel.")
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`Channel info`)
  .setDescription(`<#${c.id}>`)
  .setColor("BLUE")
  .addField("Name", c.name)
  .addField("ID", c.id)
  .addField("Type", c.type)
  .addField("Position", c.position)
  .addField("Created At", c.createdAt)
  .setTimestamp()
  .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL })
  message.channel.send(embed)
}

exports.help = {
  name: "channelinfo",
  aliases: []
}