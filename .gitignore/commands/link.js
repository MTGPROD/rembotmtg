const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
    var name = args[0]
    var link = args[1]
    var description = args[2]

    if(!name) return message.channel.send(`Please input a name !`)
    if(!link) return message.channel.send(`Please input a link !`)

    const embed = new Discord.RichEmbed()
        .setDescription(`[${name}](${link}) \n ${description}`)

    message.channel.send({embed: embed});
    
     let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!link` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`"Kiss user":`, `\`${hugUser}\``)
    .setThumbnail(message.author.avatarURL)
}
