const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let m = message.mentions.members.first() || message.member || message.guild.members.get(args[0]) || message.guild.members.find(args[0]) 
  
  let embed = new Discord.MessageEmbed()
  .setAuthor(m.user.username)
  .setThumbnail(m.user.avatarURL)
  .addField("ID", m.id)
  .addField("Tag", m.user.discriminator)
  .addField("Ping", `<@${m.id}>`)
  .addField("Nickname", m.nickname)
  .addField("Created At", m.user.createdAt)
  .addField("Joined At", m.joinedAt)
  .addField("Status", m.user.presence.status)
  .addField("Game", m.user.presence.game)
  .addField("Roles", m.roles.map(r => r.name))
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL)
  message.channel.send(embed)
}

exports.help = {
  name: "userinfo",
  aliases: []
}