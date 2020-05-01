const Discord = require('discord.js')
var pl = require('../databases/playlists.json')
const fs = require('fs')


exports.run = (bot, message, args, ops) => {
function save() {
   fs.writeFile('./databases/playlists.json', JSON.stringify(pl), err => {
       if(err) throw err;
   }) 
} 
  
  if(args[0] === 'add') { 
  let data = ops.active.get(message.guild.id);
  if(!data) return message.channel.send('There are no music playing')
  if(!pl[message.author.id]) {
     pl[message.author.id] = [] 
  }
  pl[message.author.id] += [
    data.queue[0].url
  ]
  save()
  message.channel.send(`**[${data.queue[0].songTitle}](${data.queue[0].url})** has been added to your personal playlist`)
  } 
  
} 
exports.help = {name: 'playlist', aliases: ['pl']}