const Discord = require('discord.js')

exports.run = (bot, message, args) => {
     const tamer = message.mentions.members.first()  
     if(message.guild.me.permissions.has('KICK_MEMBERS') === false) return message.channel.send('I don\'t have the `KICK_MEMBERS` permission.')  
     if(message.member.permissions.has('KICK_MEMBERS') === false) return message.channel.send("You can't use this command, because you don't have the `KICK_MEMBERS` permission.")
     if(!tamer) return message.channel.send('Usage: `r!kick @user`')
     tamer.kick(`**${tamer.user.username}#${tamer.user.discriminator}** has been kicked by ${message.author.username}#${message.author.discriminator} in **#${message.channel.name}** (${message.channel.id})`)
     const kickEmbed = new Discord.RichEmbed().setColor('RED').setDescription(`**${tamer.user.username}#${tamer.user.discriminator}** (${tamer.id}) has been kicked by **${message.author.username}#${message.author.discriminator}** (${message.author.id}) `) 
     message.channel.send(kickEmbed) 
}

exports.help = {
   name: 'kick', 
   aliases: ['k', 'boot', 'ass']
}
