const Discord = require('discord.js') 

exports.run = (bot, message, args) => {
  var report = args.join(' ')
  const embed = new Discord.RichEmbed().setColor('GREEN')
    .setTitle('New feed😁')
    .setDescription(report+`\` #${message.channel.name} (${message.channel.id}) [${message.guild.name}]\``) 
    .setImage(message.attachments.first().url)
    .setTimestamp()
    .setFooter(`By ${message.author.username}#${message.author.discriminator} (${message.author.id})`) 
  
  if(report.length < 10) return message.channel.send("Minimum 10 characters")
  message.channel.send("Thanks for your feedback !") 
  bot.channels.get('502191191216095242').send(embed)
}

exports.help = {name: "feedback", aliases: ['feed']} 