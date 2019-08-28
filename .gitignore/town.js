const Discord = require('discord.js')
var guild = require('../databases/guilds.json')
var house = require('../databases/houses.json')


exports.run = (bot, message, args) => {
  
console.log(guild[message.guild.id])

  var house1 = " The house is not assigned."
  var house2 = " The house is not assigned."
  var house3 = " The house is not assigned."
  if(guild[message.guild.id]['houses']['house1'].active === true) {house1 = ` name: **${guild[message.guild.id]["houses"]["house1"].name}**, size: **${guild[message.guild.id]["houses"]["house1"].size}**, type: **${guild[message.guild.id]["houses"]["house1"].type}**`}
  if(guild[message.guild.id]['houses']['house2'].active === true) {house2 = ` name: **${guild[message.guild.id]["houses"]["house2"].name}**, size: **${guild[message.guild.id]["houses"]["house2"].size}**, type: **${guild[message.guild.id]["houses"]["house2"].type}**`}
  if(guild[message.guild.id]['houses']['house3'].active === true) {house3 = ` name: **${guild[message.guild.id]["houses"]["house3"].name}**, size: **${guild[message.guild.id]["houses"]["house3"].size}**, type: **${guild[message.guild.id]["houses"]["house3"].type}**`}
  const town = new Discord.RichEmbed()
  .setTitle(message.guild.name)
  //.setColor(message.member.roles.first().hexColor)
  .setThumbnail(message.guild.iconURL)
  .setDescription(`:house: \`House 1\` ${house1}\n:house: \`House 2\` ${house2}\n:house: \`House 3\` ${house3}`)
  message.channel.send(town)
} 

exports.help = {name: "town", aliases:[]} 