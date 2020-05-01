const Discord = require('discord.js') 

exports.run = (bot, message, args) => {
  var report = args.join(' ')
  const embed = new Discord.RichEmbed().setColor('RED')
    .setTitle('New report📄')
    .setDescription(report+`\` #${message.channel.name} (${message.channel.id}) [${message.guild.name}]\``) 
    .setImage(message.attachments.first().url)
    .setTimestamp()
    .setFooter(`By ${message.author.username}#${message.author.discriminator} (${message.author.id})`) 
  
  if(report.length < 10) return message.channel.send("Minimum 10 characters")
  message.react('🗂️')
  message.channel.send("Thanks for your feedback !") 
  bot.channels.get('502953123883778059').send(embed)
}

exports.help = {name: "report", aliases: ['bug']} 