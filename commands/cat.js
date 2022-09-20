const Discord = require("discord.js")
const superagent = require("superagent")

exports.run = async (client, message, args) => {
  let broke = new Discord.MessageEmbed().setTitle("Cat :cat:").setDescription("Timeout, try again !")
  let image = new Discord.MessageEmbed().setTitle("Cat :cat:")
  
  let {body} = await superagent.get("http://aws.random.cat/meow")
  
  if(!{body}) return message.channel.send(broke) 
  
  image.setImage(body.file)
  image.setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL })
  image.setTimestamp()
  image.setColor("BLUE")
  
  message.channel.send(image)
}

exports.help = {
  name: "cat",
  aliases: ["chat"]
}