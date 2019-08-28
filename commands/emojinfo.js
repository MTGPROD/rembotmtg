const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let emoji = message.guild.emojis.get(args[0]) || message.guild.emojis.find(e => e.name === args[0]) 
  
  if(!emoji) return message.channel.send("I can't find the emoji.")
  /*let author = await emoji.fetchAuthor()
  if(!author) {
    author = "Cannot find author"
  }*/
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Emoji Infos")
  .setThumbnail(emoji.url)
  .addField("Name", emoji.name)
  .addField("ID", emoji.id)
  .addField("URL", emoji.url)
  //.addField("Author", author.tag)
  .addField("Identifier", emoji.identifier)
  .addField("Created At", emoji.createdAt)
  .addField("Animated?", emoji.animated)
  //.addField("Restricted Roles", emoji.roles.map(r => r.name))
  message.channel.send(embed)
}

exports.help = {
  name: "emojinfo",
  aliases: []
}