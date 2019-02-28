const Discord = require('discord.js')

exports.run = async (client, message, args, ops) => {

    var members = message.guild.members.array().join('\n')
    
    

    

    const embed = new Discord.RichEmbed()

        .setDescription(members)

    message.channel.send(embed)

}
