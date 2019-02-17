const Discord = require('discord.js');



exports.run = (client, message, args, ops) => {
    var topik = args.join(" ")
    const prepik = message.channel.topic
    if(!message.guild.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: You don't have the `MANAGE_CHANNELS` permission")
    if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: I don't have the `MANAGE_CHANNELS` permission")

message.channel.edit({ topic: topik })
    
const pik = new Discord.RichEmbed()
    .setTitle(`Topic of the channel: **#${message.channel.name}**`)
    .addField(`__Before__`, `${prepik}`, true)
    .addField(`__After__`, `${topik}`, true)
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter(client.user.username, client.user.displayAvatarURL)
message.channel.send(pik)

}
