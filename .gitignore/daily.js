const Discord = require('discord.js') 
var eco = require('../databases/economy.json')
var g = require('../databases/guilds.json') 
const fs = require('fs') 

const timestamp = Math.floor(+ new Date() / 1000)

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours + ':' + minutes + ':' + seconds;
}

function save() {
    fs.writeFile('./databases/economy.json', JSON.stringify(eco), err => {
         if(err) throw err; 
      }) 
}

exports.run = (bot, message, client) => {
  var remain = timestamp - eco[message.author.id].dailyTime
  if(timestamp < eco[message.author.id].dailyTime) return message.channel.send('You have already claimed your daily reward.')
  if(timestamp >= eco[message.author.id].dailyTime) {   
      eco[message.author.id].dailyTime = +timestamp + 86000
      eco[message.author.id].money += +300 
      save()
      const dailyEmbed = new Discord.RichEmbed()
         .setDescription(`You have claimed your **300**${g[message.guild.id].currency}`)
      message.channel.send(dailyEmbed) 
  }
}
exports.help = {
  name: 'daily',
  aliases: ['d'] 
} 