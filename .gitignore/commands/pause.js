const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
  return message.channel.send("The music module is broken, please wait for the next update.") 
  let fetched = ops.active.get(message.guild.id);
  if(!fetched) return message.channel.send('There currently isn\'t any music playing in this guild !');
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you aren't in the same channel as the music bot.");
  if(fetched.dispatcher.paused) return message.chanel.send('This music is already paused.');
  fetched.dispatcher.pause();
  message.channel.send(`**${message.author.username}** paused the song !`);

  let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!pause` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Song:`, `\`${fetched.queue[0].songTitle}\``)
    .addField(`Duration (sec):`, `\`${fetched.queue[0].songDuration}\``)
    .addField(`fetched:`, `\`${fetched}\``)
    .setThumbnail(message.author.displayAvatarURL)


client.channels.get('503494406264061963').send({embed: embed2});
}
