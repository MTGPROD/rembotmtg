const Discord = require("discord.js")

exports.run = (client, message, args) => {
const key = message.author.id

  client.shareholders.ensure(key, { name: message.author.username, tag: message.author.discriminator, id: key, moneyOut: 0, moneyIt: 0, xp: 0, gems: 0, daily_countdown: 0, hourly_countdown: 0})
  
  let data = client.shareholders
  const money = client.shareholders.getProp(key, "moneyOut")

  if (!args[0]) return message.channel.send("```\nUsage: r!deposit <number>\nExample: r!deposit 500\n\nDeposit your hand money to bank.```")
  if (isNaN(args[0])) return message.channel.send("Your argument is not a number. \n\nHelp: `r!deposit <number>`")
  
  let amount = parseInt(args[0])
  if (money < amount) return message.channel.send(`You cannot deposit more money than you have\n\nYour hand money: \`${money}💵\``)
  
  data.math(key, "-", amount, "moneyOut");
  data.math(key, "+", amount, "moneyIn");
  
  const embed = new Discord.MessageEmbed()
    .setAuthor({ name: message.author.tag, avatarURL: message.author.displayAvatarURL })
    .setTitle("Deposit")
    .setDescription(`You have deposited **${amount}**💵 in your bank 🏦.`)
  message.channel.send(embed);
}

exports.help = {
  name: "deposit",
  aliases: ["dep"]
}