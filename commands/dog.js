const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const randomPuppy = require("random-puppy");

exports.run = async (client, message, args) => {
  const broke = new Discord.MessageEmbed().setTitle("Dog 🐶").setDescription("Timeout, try again !")

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