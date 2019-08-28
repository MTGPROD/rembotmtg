const Discord = require('discord.js')
const g = require('../databases/guilds.json') 


exports.run = (bot, message, args) => {
    const tamer = message.memtions.members.first() 
    const Logs = new Discord.RichEmbed()
       .setTitle('Member banned')
       .setThumbnail(tamer.avatarURL) 
       .setDescription(`Member banned: ${tamer.user.name}#${tamer.user.avatarURL} `) 
    if(!tamer) return message.channel.send('Pls mention a member.')
    if(!tamer.bannable) return message.channel.send("I can't ban this member.")
    if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.channel.send('I lake the `BAN_MEMBERS` permission')
    if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You can\'t ban members.') 
    if(!tamer) return message.channel.send('Usage: `r!ban @user`')  
    if(g[message.guild.id].logsChannel === false) return message.channel.send('You don\'t have tell me your logs channel, define it with `r!settings logs set #channel or ID`')  
    //message.guild.ban(tamer) 
    message.guild.channels.get(g[message.guild.id].logsChannel).send(Logs)
  
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!8ball` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Member banned:`, `\`${tamer}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .setThumbnail(message.author.avatarURL)



bot.channels.get('503494406264061963').send({embed: embed2});
     
}


exports.help = {
    name: 'ban',
    aliases: ['b', 'hammer']
}