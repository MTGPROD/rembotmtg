const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let emoji = message.guild.emojis.get(args[0]) || message.guild.emojis.find(e => e.name === args[0]) 
  
  if (!emoji) return message.channel.send("I can't find the emoji.")
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Emoji Infos")
  .setThumbnail(emoji.url)
  .addFields([
    {
      name: 'Name',
      value: emoji.name
    },
    {
      name: 'ID',
      value: emoji.id
    },
    {
      name: 'URL',
      value: emoji.url
    },
    {
      name: 'Identifier',
      value: emoji.identifier
    },
    {
      name: 'Created At',
      value: emoji.createdAt
    },
    {
      name: 'Animated?',
      value: emoji.animated ? "Yes" : "No"
    },
  ])
  message.channel.send(embed)
}

exports.help = {
  name: "emojinfo",
  aliases: []
}