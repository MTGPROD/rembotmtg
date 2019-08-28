const Discord = require('discord.js')
const fs = require('fs') 
const par = require('../databases/guilds.json')

exports.run = (bot, message, args) => {
  
var guildPrefix = par[message.guild.id].fix 

if(!par[message.guild.id]) {
  par[message.guild.id] = {
     name: message.guild.name,
     region: message.guild.region,
     icon: message.guild.iconURL,
     logsChannel: false,
     welcomeChannel: false,
     fix: 'r!'
  }  
}
  
 if(args[0] === 'logs') {
     if(args[1] === 'set') {
       var channel = message.mentions.channels.first()
       if(!channel) return message.channel.send('Pls mention a channel.')
       if(args[2] == isNaN) return message.channel.send('Invalid ID') 
       if(args[2].length > 18) return message.channel.send('Invalid ID')  
           par[message.guild.id].logsChannel = channel
           fs.writeFile('./databases/guilds.json', JSON.stringify(par, null, 4), err => {
                if(err) throw err; 
                return message.channel.send(`The logs channel is: <#${args[2]}>`) 
           }) 
       } 
 }  
  
  if(args[0] === 'prefix') {
    if(args[1] === 'set') {
      if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You can\'t edit the prefix')
        
         if(!args[2]) return message.channel.send(`Write a prefix, Usage: \`${guildPrefix}settings prefix set <prefix>\``) 
        
         par[message.guild.id].fix = args[2]
         fs.writeFile('./databases/guilds.json', JSON.stringify(par, null, 4),err => {
             if(err) throw err;  
             return message.channel.send(`Your prefix is now \`${args[2]}\``) 
         }) 
         return;
      }
      if(args[1] === 'now') {
         message.channel.send(`Prefix: \`${guildPrefix}\``) 
      }
    }
if(args[0] === 'display') {
  const mainEmbed = new Discord.RichEmbed() 
       .setAuthor(message.guild.name) 
       .setTitle(`Settings :gear:`)
       .addField('Logs channel', `${par[message.guild.id].logsChannel}`)
       .addField('Welcome channel', par[message.guild.id].welcomeChannel)
       .addField('prefix', par[message.guild.id].fix) 
  message.channel.send(mainEmbed)
} 
}  

exports.help = {name: 'settings', aliases: ['set', 'paramètres', 'ings']} 