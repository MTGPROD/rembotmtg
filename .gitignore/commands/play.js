const ytdl = require('ytdl-core')
const Discord = require('discord.js')

exports.run = async (client, message, args, ops) => {
    if(!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
    //if(message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected to the guild.');
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
      requester: message.author.username,
      url: args[0],
      announceChannel: message.channel.id
    });

if(!data.dispatcher) playStream(client, ops, data);
else {
  message.channel.send(`**Added To Queue:** __${info.title}__ | **Requested By:** __${message.author.username}__`);
}

ops.active.set(message.guild.id, data);

async function playStream(client, ops, data) {
  client.channels.get(data.queue[0].announceChannel).send(`**Now Playing:** ${data.queue[0].songTitle} | Requested By: **${data.queue[0].requester}** `);
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
}
