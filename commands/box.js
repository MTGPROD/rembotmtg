const Discord = require("discord.js")

exports.run = (client, message, args) => {
  var noArgs = client.help.getProp("box", "noArgs")
  const key = message.author.id
  
  if(!args[0]) return message.channel.send(noArgs)
  
  client.box.ensure(key, { bronze: 0, silver: 0, gold: 0, diamond: 0, premium: 0, ultimate: 0 })
  
 /* function openbox(type) {
    if(!type.equals("bronze") || type.equals("silver") || type.equals("gold") || type.equals("diamond") || type.equals("premium") || type.equals("ultimate")) {
      return null
    }
    
    client.box.math(key, "-", 1, type)
    var items = ["itemTest1", "itemTest2", "itemTest3"]
    var slot1 = items[Math.floor(Math.random() * items.length)]
    var slot2 = items[Math.floor(Math.random() * items.length)]
    var slot3 = items[Math.floor(Math.random() * items.length)]
    var gold = Math.round(Math.random() * () - )
    
  }*/
  
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
      
    }  
  }
}

exports.help = {
  name: "box", 
  aliases: ["boîte", "🎁"]
}