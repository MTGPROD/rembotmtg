const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
    let abo = message.mentions.members.first()
    
       let embed2 = new Discord.RichEmbed()     .setTitle('Commande `r!voicekick` a été utilisée !')     .addField(`User:`, `\`${message.author.username}\``)     .addField(`ID:`, `\`${message.author.id}\``)     .setColor('#36393F')     .addField(`Discrinator:`, `\`${message.author.discriminator}\``)     .addField(`Created At:`, `\`${message.author.createdAt}\``)     .addField(`GuildID:`, `\`${message.guild.id}\``)     .addField(`Guild Name:`, `\`${message.guild.name}\``)     .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)     .addField(`Full content:`, `\`${message.content}\``)     .addField(`Anime research:`, `\`${args}\``)     .setThumbnail(message.author.avatarURL)  
client.channels.get('503494406264061963').send({embed: embed2});

    message.guild.createChannel('kick', 'voice').then(channel => {
        try {
            abo.setVoiceChannel(channel)  
            channel.delete()
            message.react('👢')
        } catch(e) {
            console.log(e.stack)
            abo.setVoiceChannel(channel)
            channel.delete()
            message.react('❌')
        }
    })
}
