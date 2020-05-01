const Discord = require("discord.js");
const fs = require("fs");
let eco = require('../databases/economy.json')

exports.run = (bot, message, args) => {
    eco["336650934140665859"] = {
       daily: false,
       money: 0,
       voteBox: 0,
       freeBox: 0,
       silverBox: 0,
       goldBox: 0,
       platBox: 0
    }
  fs.writeFile("./databases/economy.json", JSON.stringify(eco, null, 4), err => {
    if(err) throw err;
    message.channel.send('Account created.')
  })
}

exports.help = {
    name: "economy",
    aliases: ['eco', 'currency']
}