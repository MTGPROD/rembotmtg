const Discord = require('discord.js')
var eco = require('../databases/economy.json')
const fs = require('fs') 
var g = require('../databases/guilds.json') 
var help = require('../databases/help.json') 


exports.run = (bot, message, args) => {
 
 var target = message.mentions.members.first() 
  
  if(args[0] === 'give') {
     if(message.channel.type === 'dm') return;
     if(!target) return message.channel.send(`
\`\`\`
${help.cmds_help_money_give} 
\`\`\`
`)  
  if(args[1] == isNaN) return message.channel.send('Invalid amount.')
  if(eco[message.author.id].money < args[1]) return message.channel.send('You don\'t have enough money')
  eco[message.author.id].money += -args[1]
  eco[target.user.id].money += +args[1]  
    
  fs.writeFile('../databases/economy.json', JSON.stringify(eco), err => {
      if(err) throw err; 
  }) 
  const secondEmbed = new Discord.RichEmbed() 
      .setTitle('Give Money')
      .setDescription(`**${message.author.username}#${message.author.discriminator}** has gived ${args[1]}${g[message.guild.id].currency} to ${target.user.username}#${target.user.discriminator}`)
  message.channel.send(secondEmbed)
  } 

   const mainEmbed = new Discord.RichEmbed()
     .setTitle(`Money of **${message.author.username}**`)
     .setDescription(`${eco[message.author.id].money}${g[message.guild.id].currency}`) 
   message.channel.send(mainEmbed) 
}

exports.help = {name: 'money', aliases: ['cash', 'argents']} 