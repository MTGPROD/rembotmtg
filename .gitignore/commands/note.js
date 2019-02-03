const Discord = require('discord.js')

exports.run = (client, message, args) => {
     const Watora = new Discord.RichEmbed()
        .setTitle('Bot: Watora, Author: Zenrac#0001')
        .setThumbnail('https://cdn.discordapp.com/avatars/234234723314958339/a_e30f1a6556b4cc516cec8dd4192a65e9.gif')
        .addField(':star: 8.13/10')
        
     message.channel.send(Watora)
}
