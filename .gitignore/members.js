const Discord = require('discord.js') 


exports.run = (bot, message, args) => {
   var member = message.guild.members.size
   var ma = message.guild.members.array() 
   var dnd = message.guild.members.array().filter(m => m.presence.status === 'dnd')
   var idle = message.guild.members.array().filter(m => m.presence.status === 'idle')
   var online = message.guild.members.array().filter(m => m.presence.status === 'online')
   var offline = message.guild.members.array().filter(m => m.presence.status === 'offline')
   //var streaming = message.guild.members.array().filter(m => m.presence.game.streaming === 'true')
   
   const mainEmbed = new Discord.RichEmbed()
     .setTitle('Members informations')
     .setDescription('Here you have more precious informations about members of your server.')
     .addField('Members online', `<:online:564500718749351947> **${online.length} Members (${Math.floor((100 * online.length)/member)}%**)\n<:idle:564500677603229697> **${idle.length} Members (${Math.floor((100 * idle.length)/member)}%)**\n<:dnd:564500650038394920> **${dnd.length} Members (${Math.floor((100 * dnd.length)/member)}%)**\n<:offline:564500610372599851> **${offline.length} Members (${Math.floor((100 * offline.length)/member)}%)**\nTotal: **${member} Members**`) 
      
   message.channel.send(mainEmbed)
}

exports.help = {name: 'members', aliases: []}