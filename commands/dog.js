const Discord = require("discord.js")
const snekfetch = require("snekfetch")
const randomPuppy = require("random-puppy")

exports.run = async (client, message, args) => {
  let broke = new Discord.RichEmbed().setTitle("Dog 🐶").setDescription("Timeout, try again !")
  /*let image = new Discord.RichEmbed().setTitle("Dog 🐶")
  
  let {body} = await superagent.get("https://dog.ceo/api/breeds/image/random")
  
  if(!body) return message.channel.send(broke) 
  
  image.setImage(body.file)
  image.setFooter(client.user.username, client.user.displayAvatarURL)
  image.setTimestamp()
  image.setColor("BLUE")*/

randomPuppy("dog").then(url => {
  snekfetch.get(url).then(async res => {
  message.channel.send({
    files:[{
      attachment: res.body,
      name: "dog.png"
    }]
  })
  }) 
  })
}

exports.help = {
  name: "dog",
  aliases: ["chien"]
}