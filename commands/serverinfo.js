const Discord = require("discord.js")

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name)
  .setThumbnail(message.guild.iconURL)
  .setColor("BLUE")
  .addField("ID", message.guild.id)
  .addField("Created At", message.guild.createdAt)
  .addField("Members", message.guild.members.size)
  .addField("Boosts", `${message.guild.premiumSubscriptionCount} (Tier ${message.guild.premiumTier})`) 
  .addField("Roles", message.guild.roles.size)
  .addField("Channels", `${message.guild.channels.size}, Text: ${message.guild.channels.filter(c => c.type === "text").size}, Voice: ${message.guild.channels.filter(c => c.type === "voice").size}, Category: ${message.guild.channels.filter(c => c.type === "category").size}, News: ${message.guild.channels.filter(c => c.type === "news").size}, Store: ${message.guild.channels.filter(c => c.type === "store").size}`)
  .addField("Emojis", `${message.guild.emojis.size}, Normal: ${message.guild.emojis.filter(e => e.animated === false).size}, Animated: ${message.guild.emojis.filter(e => e.animated === true).size}`) 
  .setTimestamp()
  .setFooter(client.user.username, client.user.defaultAvatarURL)
  
  message.channel.send(embed)
}

exports.help = {
  name: "serverinfo",
  aliases: ["guildinfo"]
} 