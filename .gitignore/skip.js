const Discord = require('discord.js') 

exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if(!fetched) return message.channel.send('There currently ins\'t any music playing in the guild !');
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, you currently aren\'t in the same channel as the bot !');
  let userCount = message.member.voiceChannel.members.size;
  let required = Math.ceil(userCount/2);
  if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you already voted to skip ! ${fetched.queue[0].voteSkips.length}/${required} required.`);
  fetched.queue[0].voteSkips.push(message.member.id);
  ops.active.set(message.guild.id, fetched);
  if(fetched.queue[0].voteSkips.length >= required) {
    message.channel.send({embed: skip});
    return fetched.dispatcher.emit('end');
  }
  const skip = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setDescription('Song skiped !')
  
   let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!skip` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
        .addField(`Full content:`, `\`${message.content}\``)


    bot.channels.get('503494406264061963').send({embed: embed2});
}

exports.help = {name: 'skip', aliases: ['s']} 