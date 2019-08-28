const fs = require('fs') 
const Discord = require('discord.js')
var guild = require('../databases/guilds.json')

function save() {
  fs.writeFile('./databases/guilds.json', JSON.stringify(guild), err => {
    if(err) return console.log('[DATABASE] Can\'t write in guilds.json =>'+err) 
                            
  }) 
} 

exports.run = (bot, message, args) => {
 /* var target = message.mentions.members.first()
  if(args[0] === 'set') {
    var role = message.mention.roles.first() || message.guild.roles.find("name", args[1]) 
    
    if(!role) return message.channel.send("`Usage: r!mute set @rolemention`")
    guild[message.guild.id].muteRole = role.id
    save()
    message.channel.send({embed: {
      description: `The mute role is now <@&${role.id}>`
    }})
  }  
  if(!args) {
  var reason = args.join(' ').slice(21)
  if(!guild[message.guild.id].muteRole) return message.channel.send("This guild does not have a mute role yet, please add one with `r!mute set @rolemention`")
  if(!target) return message.channel.send('`Usage: r!mute @user [reason]`')
  if(!bot.guild.me.permissions.has('MANAGE_ROLES')) return message.channel.send("I need to the `MANAGE_ROLES` permission to use this this command.") 
  if(!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send("You need to the `MANAGE_ROLES` permission to use this command.") 
  if(!reason) {reason = "No reason"} 
  if(target.roles.has(guild[message.guild.id].muteRole) { message.channel.send("This member is already muted.")  } 
  target.setRoles([`${guild][message.channel.id].muteRole}`])
  message.channel.send({embed: {
    description: `<@${target.id}> is now muted ! Reason: \`${reason}\` use \`r!unmute @user [reason]\` for unmute this member.`
  }})
  } */
} 

exports.help = {name: "mute", aliases: []} 