const Discord = require('discord.js')

exports.run = (bot, message, args) => {
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);
    if (!role) role = message.member.highestRole;
console.log('After variable') 

  const embed = new Discord.RichEmbed()
     .setTitle("Role informations")
     .setColor(role.hexColor) 
     .addField("Name", role.name) 
     .addField("ID", role.id)
     .addField("Color", role.hexColor)  
     .addField("Created At", role.createdAt)
     .addField("Members", role.members.size) 
     .addField("Editable", role.editable)  
     .addField("Hoist", role.hoist)
     .addField("Position (Calculated)", role.calculatedPosition)
     .addField("Managed", role.managed)
     .addField("Position", role.position)
     .addField("Mentionable", role.mentionable)
     .addField("Deleted", role.deleted)
     .addField("Created By", `${role.client.user.username}#${role.client.user.discriminator}`)
     .addField("Guild", role.guild)
  message.channel.send(embed)
  
  let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!roleinfo` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .setThumbnail(message.author.avatarURL)


    bot.channels.get('503494406264061963').send(embed2);

} 

exports.help = {name: "roleinfo", aliases: []} 