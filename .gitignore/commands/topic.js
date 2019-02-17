const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {
    var topik = args.join(" ")

    /*if(!client.guild.me.hasPermissions("MANAGE_CHANNELS")) return message.channel.send("I don't have the `MANAGE_CHANNELS` permission")*/

message.channel.edit({ topic: topik })
message.channel.send(`The topic of this channel is \`${topik}\``)

}
