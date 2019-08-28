const Discord = require("discord.js")

exports.run = (client, message, args) => {
  const key = message.guild.id
  if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send("You'd have the `MANAGE_GUILD` permission.")
  if(!args[0]) return message.channel.send("```\nUsage: r!prefix set <prefix>\nExample: r!prefix set +\n\nChange the guild prefix.\n\nSub-command:\n\nreset: set the default prefix\nset: set the prefix of your choice```")
  if(args[0] === "set") {
  client.servers.ensure(key, { welcomeMessage: false, welcomeMessageChannel: false, prefix: "r!", leaveMessage: false, leaveMessageChannel: false })
  client.servers.setProp(key, "prefix", "r!")
  
  client.servers.setProp(key, "prefix", args[1])
  
  let embed = new Discord.MessageEmbed().setTitle("Prefix").setDescription(`The new prefix for the guild is \`${args[1]}\`.`)
  message.channel.send(embed)
  }
  
  if(args[0] === "reset") {
    client.servers.setProp(key, "prefix", "r!")
    message.channel.send("The prefix has been reset. (`r!`)")
  }
}

exports.help = {
  name: "prefix", 
  aliases: []
}