const Discord = require("discord.js")

exports.run = (client, message, args) => {
  
  const key = message.guild.id
  
  client.servers.ensure(key, { welcomeMessage: false, welcomeMessageChannel: false })  
  if(!args.join(" ")) return message.channel.send("```\nUsage: r!welcomeMessage <welcome message>\nUsage: r!welcomeMessage remove\nUsage: r!welcomeMessage channel <channel id/#channel/name>\nExample: r!welcomeMessage Welcome {user.name/tag/mention} to {server}\nExample: r!welcomeMessage remove\nExample: r!welcomeMessage channel welcome-channel/#welcome-channel/490964157370335263```")
  
  if(args[0] === "add")  {

  var WM = args.join(" ").slice(args[0].length)
  client.servers.setProp(key, "welcomeMessage", WM)
  const added = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL).setTitle("Welcome Message").setDescription(`The new welcome message for **${message.guild.name}** is: \`${WM}\``)
  message.channel.send(added)
  }
  
  if(args[0] === "channel") {
    var channelResovable = message.mentions.channels.first() || message.guild.channels.get(args[1]) || message.guild.channels.find("name", args[1])
    if(!channelResovable) return message.channel.send("I can't find the channel.")
    
    client.servers.setProp(key, "welcomeMessageChannel", channelResovable.id)
    const channeled = new Discord.MessageEmbed().setTitle("Welcome Message").setAuthor(message.author.tag, message.author.displayAvatarURL).setDescription(`The channel for the welcome message is: \`${channelResovable.name}\``)
    message.channel.send(channeled)
  }
  
  if(args[0] === "remove") {
    client.servers.setProp(key, "welcomeMessage", false)
    client.servers.setProp(key, "welcomeMessageChannel", false)
    const deleted = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL).setTitle("Welcome Message").setDescription("The Welcome Message for this server has been deleted.")
    message.channel.send(deleted)
  }
}

exports.help = {
  name: "welcomemessage", 
  aliases: ["welcomemsg", "wm"]
}