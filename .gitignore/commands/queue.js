const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if(!fetched) return message.channel.send('There currently isn\'t any music playing in this guild !');
  let queue = fetched.queue;
  let nowPlaying = queue[0];
  let resp = `__**Now Playing**__\n[**${nowPlaying.songTitle}**](https://youtube.com${nowPlaying.url}) - **Requested By:** *${nowPlaying.requester}*\n\n__**Queue**__\n`;
  let respp = ''
  for(var i = 1; i < queue.length; i++) {
    respp += `${i}. [**${queue[i].songTitle}**](${queue[i].url}) - **Requested By:** *${queue[i].requester}*\n`;
  }
  const embed = new Discord.RichEmbed()
    .setDescription(`${resp}${respp}`)
  
  message.channel.send(embed);
  
    let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!queue` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .addField(`Queue:`, `\`${queue}\``)


    client.channels.get('503494406264061963').send(embed2);
}
