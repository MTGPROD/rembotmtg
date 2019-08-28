const Discord = require("discord.js")

exports.run = (client, message, args) => {
  
  const key = message.guild.id
  
  client.servers.ensure(key, { welcomeMessage: false, welcomeMessageChannel: false, prefix: false, leaveMessage: false, leaveMessageChannel: false })  
  if(!args.join(" ")) return message.channel.send("```\nUsage: r!welcomeMessage set <welcome message>\nUsage: r!welcomeMessage remove\nUsage: r!leaveMessage channel <channel id/#channel/name>\nExample: r!leaveMessage Goodbye {user.name/tag/mention}\nExample: r!leaveMessage remove\nExample: r!leaveMessage channel welcome-channel/#welcome-channel/490964157370335263```")
  
  if(args[0] === "set")  {

  var LM = args.join(" ").slice(args[0].length)
  client.servers.setProp(key, "leaveMessage", LM)
  const added = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL).setTitle("Welcome Message").setDescription(`The new leave message for **${message.guild.name}** is: \`${LM}\``)
  message.channel.send(added)
  }
  
  if(args[0] === "channel") {
    var channelResovable = message.mentions.channels.first() || message.guild.channels.get(args[1]) || message.guild.channels.find("name", args[1])
    if(!channelResovable) return message.channel.send("I can't find the channel.")
    
    client.servers.setProp(key, "leaveMessageChannel", channelResovable.id)
    const channeled = new Discord.MessageEmbed().setTitle("Leave Message").setAuthor(message.author.tag, message.author.displayAvatarURL).setDescription(`The channel for the leave message is: \`${channelResovable.name}\``)
    message.channel.send(channeled)
  }
  
  if(args[0] === "remove") {
    client.servers.setProp(key, "leaveMessage", false)
    client.servers.setProp(key, "leaveMessageChannel", false)
    const deleted = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL).setTitle("Leave Message").setDescription("The leave message for this server has been deleted.")
    message.channel.send(deleted)
  }
}

exports.help = {
  name: "leavemessage", 
  aliases: ["leavemsg", "lm"]
}