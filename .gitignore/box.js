const Discord = require('discord.js')
const fs = require('fs')
var eco = require('../databases/economy.json')

var currency = '<:coin:561249143427825715>'

var daily = Math.floor(Math.random() * 50)
//var vote = Math.floor(Math.random() * 250)
var wood = Math.floor(Math.random() * 150)
var silver = Math.floor(Math.random() * 300)
var gold = Math.floor(Math.random() * 500)
var platinum = Math.floor(Math.random() * 1000)

const timestamp = + new Date() / 1000

function save() {
fs.writeFile("./databases/economy.json", (eco, null, 4), err =>{
                 if(err) throw err;
  })
}

exports.run = (bot, message, args) => {

  const DBL = require("dblapi.js");
const dbl = new DBL(process.env.BAPITOKEN, bot);

  const dailyBoxEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.id, message.author.displayAvatarURL)
      .setTitle('Box opening `Daily`')
      .setDescription(`You have earn ${daily}${currency}`)
 /* const voteBoxEmbed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL)
     .setTitle('Box opening `vote`')
     .setDescription(`You have earn ${vote}${currency}`)*/
  const woodBoxEmbed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL)
     .setTitle('Box opening `Wood`')
     .setDescription(`You have earn ${wood}${currency}`)
  const silverBoxEmbed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL)
     .setTitle('Box opening `Silver`')
     .setDescription(`You have earn ${silver}${currency}`)
  const goldBoxEmbed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL)
     .setTitle('Box opening `Gold`')
     .setDescription(`You have earn ${gold}${currency}`)
  const platBoxEmbed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL)
     .setTitle('Box opening `Platinum`')
     .setDescription(`You have earn ${platinum}${currency}`)

  if(args[0] === 'claim') {
    if(args[1] === 'daily') {
      if(eco[message.author.id].daily > timestamp) return message.channel.send('You have already claimed it')
              eco[message.author.id].voteBox =+ +1
              eco[message.author.id].voteTime = timestamp+86000
              message.channel.send('You have claimed your voteBox.')
              save()
      };
    }

  if(args[0] === 'give') {
     var target = message.mentions.members.first()
     if(message.author.id != '234234723314958339') return message.channel.send('You\'re not a Developer')
     if(!target) return message.channel.send("Please mention a user.")
     if(args[1] === 'wood') {
        eco[target.user.id].woodBox += +args[2]
       save()
     }

     if(args[1] === 'silver') {
        eco[target.user.id].silverBox += +args[2]
       save()
     }

     if(args[1] === 'gold') {
        eco[target.user.id].goldBox += +args[2]
       save()
     }

     if(args[1] === 'platinum') {
        eco[target.user.id].platBox += +args[2]
       save()
     }

     if(args[1] === 'wood') {
        eco[target.user.id].woodBox += +args[2]
       save()
     }
  }

  if(args[0] === 'open') {
    if(!eco[message.author.id]) {
      eco[message.author.id] = {
       daily: 0,
       hasVoted: false,
       money: 0,
       dailyBox: 0,
       silverBox: 0,
       goldBox: 0,
       platBox: 0
    }
    }
    if(args[1] === 'daily') {
      if(eco[message.author.id].dailyBox < 1) return message.channel.send('You don\'t have your daily box')
      eco[message.author.id].dailyBox--
      eco[message.author.id].money =+ +daily
      save()
      message.channel.send(dailyBoxEmbed) 
    }
    /*if(args[1] === 'vote') {
      if(eco[message.author.id].voteBox < 1) return message.channel.send('You don\'t have the voteBox vote for me on DBL and claim it with `r!box claim vote`')
      eco[message.author.id].voteBox--
      eco[message.author.id].money =+ +vote
      message.channel.send(voteBoxEmbed)
      fs.writeFile("./databases/economy.json", JSON.stringify(eco, null, 4), err => {
      if(err) throw err;
      })
    }*/
    if(args[1] === 'wood') {
      if(eco[message.author.id].woodBox < 1) return message.channel.send('You don\'t have a woodBox')
      eco[message.author.id].woodBox--
      eco[message.author.id].money =+ +wood
      message.channel.send(woodBoxEmbed)
      fs.writeFile('./databases/economy.json', JSON.stringify(eco, null, 4), err => {
          if(err) throw err;
      })
    }
    if(args[1] === 'silver') {
      if(eco[message.author.id].silverBox < 1) return message.channel.send('You don\'t have a Silver box')
      eco[message.author.id].silverBox--
      eco[message.author.id].money =+ +silver
      message.channel.send(silverBoxEmbed)
      fs.writeFile('./databases/economy.json', JSON.stringify(eco, null, 4), err => {
          if(err) throw err;
      })
    }
    if(args[1] === 'gold') {
      if(eco[message.author.id].goldBox < 1) return message.channel.send('You don\'t have a Gold box')
      eco[message.author.id].goldBox--
      eco[message.author.id].money =+ +gold
      message.channel.send(goldBoxEmbed)
      fs.writeFile('./databases/economy.json', JSON.stringify(eco, null, 4), err => {
          if(err) throw err;
      })
    }
    if(args[1] === 'platinum') {
      if(eco[message.author.id].platBox < 1) return message.channel.send('You don\'t have a Platinum box')
      eco[message.author.id].platBox--
      eco[message.author.id].money =+ +platinum
      message.channel.send(platBoxEmbed)
      fs.writeFile('./databases/economy.json', JSON.stringify(eco, null, 4), err => {
          if(err) throw err;
      })
    }
  }
  
  let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!8ball` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    //.addField(`Responce:`, `\`${fetched}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .setThumbnail(message.author.avatarURL)



bot.channels.get('503494406264061963').send({embed: embed2});
    
}

exports.help = {name: 'box', aliases: ['case']}
