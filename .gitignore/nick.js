const Discord = require('discord.js')

exports.run = (bot, message, args) => {
  //const nickEmbed = new Discord.RichEmbed().setColor('BLUE').setDescription(`Your nickname is now **${nick}**`) 
 // if(!message.member.manageable) return message.channel.send("I can't rename you") 
     if(!args.join(' ')) return message.channel.send("Usage: `r!nick <nickname> [@mention]`")
     if(!message.guild.me.permissions.has("MANAGE_NICKNAMES")) return message.channel.send("I don't have the `MANAGE_MESSAGES` permission.\nYou're don't familiar with permissions go to my doc => https://app.gitbook.com/@rembotmtg/s/rem/introducing-permissions_flags") 
     message.member.setNickname(args.join(' '), `${message.author.username} has changed his nickname to: ${message.member.nickname}`).then(nick => {
       const nickEmbed = new Discord.RichEmbed().setColor('BLUE').setDescription(`Your nickname is now **${args.join(' ')}**`)  
       message.channel.send(nickEmbed)
     })
}   

exports.help = {name: "nick", aliases: []} 