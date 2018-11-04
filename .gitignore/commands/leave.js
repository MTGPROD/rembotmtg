exports.run = (client, message, args, ops) => {
    if(!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel')
    if(!message.guild.me.voiceChannel) return message.channel.send('I am not connected to a voice channel')
    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('You aren\'t connected to the same channel')
    message.guild.me.voiceChannel.leave()
    message.channel.send('Leaving channel...')
    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!leave` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .setThumbnail(message.author.avatarURL)

client.channels.get('503494406264061963').send(embed2);
}
