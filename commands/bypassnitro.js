const Discord = require("discord.js")

exports.run = (client, message, args) => {
  const emoji = message.guild.emojis.find("name", args[0])
 //const emoji1 = message.guild.emojis.find("name", args[1])
  
  if(!emoji) return message.channel.send("I can't")
  if(!emoji.animated) return message.channel.send("This emoji is not animated") 
  
  /*if(args[0] === "noembed") {
    message.delete()
    message.channel.send(`<a:${emoji1.name}:${emoji1.id}>`)
  }*/
  
  message.delete()
  const embed = new Discord.MessageEmbed().setTitle(message.author.username+"#"+message.author.discriminator)
  .setDescription(`<a:${emoji.name}:${emoji.id}>`)
  message.channel.send(embed)
  
}

exports.help = {
  name: "bypassnitro",
  aliases: ["animate"]
}