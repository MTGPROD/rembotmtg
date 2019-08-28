const Discord = require("discord.js")

exports.run = (client, message, args) => {
const key = message.author.id


  client.shareholders.ensure(key, { name: message.author.username, tag: message.author.discriminator, id: key, moneyOut: 0, moneyIt: 0, xp: 0, gems: 0, daily_countdown: 0, hourly_countdown: 0})
  var data = client.shareholders
  const money = client.shareholders.getProp(key, "moneyIn") 
  if(!args[0]) return message.channel.send("```\nUsage: r!withdraw <number>\nExample: r!withdraw 500\n\nWithdraw your bank money to hand.```")
  if(isNaN(args[0])) return message.channel.send("Your argument is not a number. \n\nHelp: `r!withdraw <number>`")
  var amount = parseInt(args[0], 10)
  console.log(amount)
  if(money < amount) return message.channel.send(`You cannot withdraw more money than you have\n\nYour bank money: \`${money}💵\``)
  
  data.math(key, "-", amount, "moneyIn")
  data.math(key, "+", amount, "moneyOut")
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setTitle("Withdraw")
  .setDescription(`You have withdrawed **${amount}**💵 in your hand 🖐️.`)
  message.channel.send(embed)
}

exports.help = {
  name: "withdraw",
  aliases: ["with"]
}