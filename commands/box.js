const Discord = require("discord.js")

exports.run = (client, message, args) => {
  var noArgs = client.help.getProp("box", "noArgs")
  const key = message.author.id
  
  if(!args[0]) return message.channel.send(noArgs)
  
  client.box.ensure(key, { bronze: 0, silver: 0, gold: 0, diamond: 0, premium: 0, ultimate: 0 })
  
  if(args[0] === "open") {
    if(args[1] === "bronze") {
      if(client.box.getProp(key, args[1]) < 1) return message.channel.send(`You don't have any **Bronze** box. Try \`r!box daily/hourly\` to get boxes.`)
      
      client.box.math(key, "-", 1, "bronze")
      client.shareholders.math(key, "+", 200, "moneyOut")
      let bronze = new Discord.MessageEmbed()
      .setTitle("Bronze box")
      .setDescription("200 :dollar:")
      message.channel.send(bronze)
    }
    
    if(args[1] === "silver") {
      client.box.math(key, "-", 1, "silver")
      client.shareholders.math(key, "+", 500, "moneyOut")
      let bronze = new Discord.MessageEmbed()
      .setTitle("Silver box")
      .setDescription("500 :dollar:")
      message.channel.send(bronze)
    }  
  }
}

exports.help = {
  name: "box", 
  aliases: ["boîte", "🎁"]
}