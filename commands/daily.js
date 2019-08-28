const Discord = require("discord.js")

exports.run = (client, message, args) => {
  const key = message.author.id
  const random_number = Math.round(Math.random() * (350 - 100) + 100)
  const random_number_xp = Math.ceil(Math.random() * (90 - 10) + 10)
  const random_number_gems = Math.round(Math.random() * (1 - 0) + 0)
  const timestamp = Math.round(Date.now()/1000) 
  
  client.shareholders.ensure(key, { name: message.author.username, tag: message.author.discriminator, id: key, picture: message.author.defaultAvatarURL, moneyOut: 0, moneyIn: 0, xp: 0, gems: 0, daily_countdown: 0, hourly_countdown: 0})
  
  var money = client.shareholders.getProp(key, "moneyOut")
  var xp = client.shareholders.getProp(key, "xp")
  var gems = client.shareholders.getProp(key, "gems")
  
  //client.shareholders.ensure(key, { name: message.author.username, tag: message.author.discriminator, id: message.author.id, picture: message.author.defaultAvatarURL, moneyOut: 0, moneyIn: 0, xp: 0, gems: 0, daily_countdown: 0, hourly_countdown: 0})
  
  if(timestamp < client.shareholders.getProp(key, "daily_countdown")) return message.channel.send("You have already claimed your daily reward, retry later !")
  
  client.shareholders.math(key, "+", random_number, "moneyOut")
  client.shareholders.math(key, "+", random_number_xp, "xp")
  client.shareholders.math(key, "+", random_number_gems, "gems")
  client.shareholders.setProp(key, "daily_countdown", timestamp+86400)
  
  const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL).setTitle(`(**${client.shareholders.getProp(key, "moneyOut")}** + **${client.shareholders.getProp(key, "moneyIn")}** :dollar:) **${xp}** <:xp:611220945285152776> **${gems}** :gem:`).setDescription(`Here's your daily reward, you can also use \`r!hourly\` to earn more.\n\n+**${random_number}** :dollar:, +**${random_number_xp}** <:xp:611220945285152776>, +**${random_number_gems}** :gem:`)
  message.channel.send(embed)
}

exports.help = {
  name: "daily",
  aliases: ["journalier"]
}