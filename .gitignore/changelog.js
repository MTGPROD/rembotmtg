const Discord = require('discord.js')

exports.run = (bot, message, args) => {
  const Embed = new Discord.RichEmbed() 
  .setColor('BLUE')
  .setTitle('Rem Change-log `3.0 BETA` => `4.0 Stable`')
  .setDescription("Here you have all changes of the bot.") 
  .addField("Ping 🏓", "```\n+ Responce time reduced 100ms to 15ms\n+ New host, glitch.com```")
  .addField("New advanced economy 💵", "```\n+ Chest opening\n+ Daily reward\n+ house economy system (view category House🏠)```")
  .addField("Moderation 🎩", "```\n+ autorole command\n+ mute command improved```")
  message.channel.send(Embed)
  
var embed2 = new Discord.RichEmbed()
  
    .setTitle('Commande `r!changelog` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .setThumbnail(message.author.avatarURL)

bot.channels.get('503494406264061963').send({embed: embed2});
    
} 

exports.help = {name: "changelog", aliases: ['change', 'log']} 