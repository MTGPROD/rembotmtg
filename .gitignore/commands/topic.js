const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {
    var topik = args.join(" ")
    const prepik = message.channel.topic
    /*if(!client.guild.me.hasPermissions("MANAGE_CHANNELS")) return message.channel.send("I don't have the `MANAGE_CHANNELS` permission")*/

message.channel.edit({ topic: topik })
    
const pik = new Discord.RichEmbed()
    .setTitle(`Topic of the channel: #${message.channel.name}`)
    .addField(`Before`, `**${prepik}**`, true)
    .addField(`After`, `**${topik}**`, true)
message.channel.send(`The topic of this channel is **${topik}**`)

}
