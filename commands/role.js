const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  //let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(r => r.name === args.join(" ").slice(args[0].length))
  
  if(!args[0]) return message.channel.send("```\nUsage: r!role <subcommand> <memberType> <role>\nExample: r!role add humans @Members\n\nSub-command:\n\nadd: add role to members/humans/bots\nremove: remove role to all members/humans/bots\n\nGive/Remove roles to a lot of members/humans/bots```")
 // if(!role) return message.channel.send("I can't find the role.")
  
  if(args[0] === "add") {
    if(!args[1]) return message.channel.send("```\nUsage: r!role add <memberType*> <role>\nExample: r!role add humans Members\n\n*memberType: members/humans/bots```")
    if(args[1] === "humans") {
      if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send("I don't have the `MANAGE_ROLES` permission") 
      let args2Role = message.mentions.roles.first() || message.guild.roles.get(args[2]) || message.guild.roles.find(r => r.name === args.join(" ").slice(args[0].length+args[1].length))  
      if(!args2Role) return message.channel.send("I can't find the role.")
      if(args2Role.comparePositionTo(message.guild.me.highestRole) > 0) return message.channel.send("This role is higher than mine, i can't manage it") 
      
      let humans = message.guild.members.filter(m => m.user.bot === false).size
      
     await message.guild.members.forEach(m => {
        //let m = message.guild.members.filter(m => m.user.bot === false).map(m => m.id)
        
        let mm = message.guild.members.get(m)
      
        if(!mm.managable) return;
        if(mm.roles.has(args2Role)) return;
        mm.addRole(args2Role.id)
        //setTimeout(() => {}, 700) 
      })
      message.channel.send(`**${humans}** Humans, have been given the **${args2Role.name}** role`)
    }
  }
}

exports.help = {
  name: "role",
  aliases: []
}