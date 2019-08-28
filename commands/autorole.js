const Discord = require('discord.js') 

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send("```\nUsage: r!autorole <subcommand>\n\nSub-command:\n\nadd: Add a role from the autoroles list.\nremove: Remove an role from the autorole list.\nclear: Clear the autorole list\nlist: Get the list of roles in autorole list.\n```")
  if(args[0] === "add") {
    if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send("I don't have the permission to manage roles, give me the permission (`MANAGE_ROLES`) and retry.") 
    if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("You don't have the permission to manage roles, ask to your administrator.")  
    let key = message.guild.id
    if(!args[1]) return message.channel.send("```\nUsage: r!autorole add <role>\nExample: r!autorole add @Members\n\nAdd an autorole in your server```") 
    var role = message.mentions.roles.first() || message.guild.roles.get(args[1]) || message.guild.roles.find(r => r.name === args.join(" ").slice(args[0].length+1)) 
    console.log(args.join(" ").slice(4))
    if(!role) return message.channel.send("I can't find the role.")  
    if(role.comparePositionTo(message.guild.me.highestRole) > 0) return message.channel.send("This role is higher than mine, i can't manage it") 
    
    client.autoroles.ensure(key, [])
    client.autoroles.push(key, role.id) 
    
    message.channel.send(`The **${role.name}** role has been added to autorole list.`)
  } 
  if(args[0] === "remove") {
    if(args[0] === "remove") return message.channel.send("This didn't work, sorry use `r!autorole clear` instead (this will delete all autoroles)") 
   // let role = message.mentions.roles.first() || message.guild.roles.get(args[1]) || message.guild.roles.find(r => r.name === args.join(" ").slice(args[0].length+1))
    if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send("I don't have the permission to manage roles, give me the permission and retry.")
    if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("You don't have the permission to manage roles, ask to your administrator")
    if(isNaN(args[1])) return message.channel.send("Invalid role") 
    if(!client.autoroles.has(message.guild.id, args[1]-1)) return message.channel.send("I can't find the role in my database. I you think this is not right use `r!bugreport <text>` to report this to my developer `MTG#8211`")                          
    
    client.autoroles.ensure(message.guild.id, []) 
    client.autoroles.remove(message.guild.id, args[1]-1)
    
    message.channel.send(`The **${role.name}** role has been added to autorole list`)  
  } 
  if(args[0] === "clear") {
    if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send("I don't have the permission to manage roles, give me the permission and retry.") 
    if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("You don't have the permission to manage roles, ask to your administrator.") 
    var key = message.guild.id
    
    client.autoroles.ensure(key, [])
    client.autoroles.delete(key) 
    
    message.channel.send("The autorole list has been removed.") 
   } 
  if(args[0] === "list") {
    if(!client.autoroles.has(message.guild.id, 0)) return message.channel.send("There are no autoroles.") 
    let sizeOf = client.autoroles.get(message.guild.id)
    console.log(sizeOf) 
    let list = "" 
   for(var i = 0; i < client.autoroles.get(message.guild.id).length; i++) {
      
      list += `[\`${i+1}\`](https://g.g) <@&${client.autoroles.get(message.guild.id, i)}>\n`
    }  
    let embed = new Discord.MessageEmbed()
    .setTitle(`Autoroles for **${message.guild.name}**`)  
    .setDescription(list)
    message.channel.send(embed)
  }  
}  

exports.help = {
  name: "autorole",
  aliases: [] 
} 