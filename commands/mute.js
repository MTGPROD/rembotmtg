const Discord = require('discord.js') 

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("MANAGE_ROLES", "MANAGE_CHANNELS")) return message.channel.send("You can't mute in this server. (`MANAGE_CHANNELS` or/and `MANAGE_ROLES` permissions are missing)")
  if(!message.guild.me.permissions.has("MANAGE_ROLES", "MANAGE_CHANNELS")) return message.channel.send("I can't mute in this server (MANAGE_CHANNELS or/and `MANAGE_ROLES` permissions are missing) ")
  if(!args[0]) return message.channel.send("```\nUsage: r!mute @mention | <id>\nExample: r!mute @MTG | 234234723314958339\n\nPrevents a user from talking throughout the server.```")

  
  
  const muted = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!muted) return message.channel.send("I can't find this user.")
  const overwriteChannel = message.guild.channels.filter(c => c.type === 'text').map(c => c.id)
  const mutedRole = message.guild.roles.find("name", "Rem Muted")
  var reason = "No reason."
  if(args[0]) {
    reason = args.join(" ").slice(args[0].length)
  } 
  if(!message.guild.roles.find("name", "Rem Muted")) {
    await message.guild.createRole({
      name: "Rem Muted", 
      color: "BLACK", 
    })
    console.log(overwriteChannel.length) 
    for(var i = 0; i < overwriteChannel.length; i++) {
      message.guild.channels.get(overwriteChannel[i]).overwritePermissions(message.guild.roles.find("name", "Rem Muted"), {
        SEND_MESSAGES: false, 
        ADD_REACTIONS: false 
      })
      setTimeout(() => {}, 500) 
    } 
    if(message.member.roles.has(message.guild.roles.find("name", "Rem Muted"))) return message.channel.send("This member is already muted, use `r!unmute` instead.") 
                                                                                                 
     await muted.addRole(message.guild.roles.find("name", "Rem Muted"))
      const response = new Discord.MessageEmbed().setTitle("Mute").setDescription(`[${muted.user.username}#${muted.user.discriminator}](https://google.com) has been muted by [${message.author.username}#${message.author.discriminator}](https://google.com) for ${reason}`)
    await message.channel.send(response)
    } else {
      muted.addRole(message.guild.roles.find("name","Rem Muted"))
      const responses = new Discord.MessageEmbed().setTitle("Mute").setDescription(`[${muted.user.username}#${muted.user.discriminator}](https://google.com) has been muted by [${message.author.username}#${message.author.discriminator}](https://google.com) for [${reason}](https://play-sse.itch.io/latest)`)
      message.channel.send(responses)
    } 
  }


exports.help = {
  name: "mute",
  aliases: []
} 