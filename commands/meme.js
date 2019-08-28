const Discord = require("discord.js")
const randomPuppy = require("random-puppy")
const snekfetch = require("snekfetch")

exports.run = (client, message, args) => {
  let reddit = [
    "meme",
    "animemes",
    "MemesOfAnime",
    "animememes",
    "AnimeFunny",
    "dankmeme",
    "dankmemes",
    "Wholesomememes",
    "MemeEconomy",
    "techsupportanimals",
    "meirl",
    "me_irl",
    "AdviceAnimals",
  ]
  
  let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)]
  
  randomPuppy(subreddit).then(url => {
    snekfetch.get(url).then(async res => {
      message.channel.send({
        files: [{
          attachment: res.body,
          name: "meme.png"
        }]
      })
    })
  })
}

exports.help = {
  name: "meme",
  aliases: []
}