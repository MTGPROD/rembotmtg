const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const infos = require('./infos.json');

 function time(timesec){
      let upTimeOutput = "";
      if (timesec<60) {
          upTimeOutput = `${timesec}s`;
      } else if (timesec<3600) {
          upTimeOutput = `${Math.floor(timesec/60)}:${timesec%60}`;
      } else if (timesec<86400) {
          upTimeOutput = `${Math.floor(timesec/3600)}:${Math.floor(timesec%3600/60)}:${timesec%3600%60}`;
      } else if (timesec<604800) {
          upTimeOutput = `${Math.floor(timesec/86400)}:${Math.floor(timesec%86400/3600)}:${Math.floor(timesec%86400%3600/60)}:${timesec%86400%3600%60}`;
      }
      return upTimeOutput;
}

exports.run = async (client, message, args, ops) => {
    if(!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
    if(!args[0]) return message.channel.send('Sorry, please input a url following the command.')
    let validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send('Sorry, please input a ***VALID*** url following the command.');
    let info = await ytdl.getInfo(args[0]);
    let data = ops.active.get(message.guild.id) || {};
    if(!data.connection) data.connection = await message.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;
    data.queue.push({
      songTitle: info.title,
      songDuration: info.length_seconds,
      requester: message.author.username,
      url: args[0],
      announceChannel: message.channel.id
    });

   

if(!data.dispatcher) playStream(client, ops, data);
else {
  const embed = new Discord.RichEmbed()
      .setTitle('**Added To Queue**')
      .setDescription(`:bust_in_silhouette: Title: [${info.title}](${args[0]})\n__**Requested By:**__ ${message.author.username}#${message.author.discriminator}\n:clock1:Duration: ${time(info.length_seconds)}`)
      .setTimestamp()
      .setFooter(infos.version, client.user.displayAvatarURL)

  message.channel.send({embed: embed})
}

ops.active.set(message.guild.id, data);

async function playStream(client, ops, data) {
  client.channels.get(data.queue[0].announceChannel).send({embed: {
    color: 3447003,
    title: `**Now Playing:**`,
    description: `${data.queue[0].songTitle}\nRequested By: **${data.queue[0].requester}**\nDuration: ${time(info.length_seconds)}`,
}});   

  data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
  data.dispatcher.guildID = data.guildID;
  data.dispatcher.once('end', function() {
    end(client, ops, this);
  });
}

function end(client, ops, dispatcher) {
    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();

    if(fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        playStream(client, ops, fetched);

      } else {
        ops.active.delete(dispatcher.guildID);
        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if(vc) vc.leave();
      }
    }

   let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!play` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `#\`${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Queue:`, `\`${queue}\``)
    .setThumbnail(message.author.displayAvatarURL)


client.channels.get('503494406264061963').send(embed2);
 
  }


