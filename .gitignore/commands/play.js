const oldytdl = require('ytdl-core');
const ytdl = require('ytdl-core-discord') 
const ytpl = require('youtube-playlist') 
const Discord = require('discord.js');
const infos = require('../databases/infos.json');
const ready = require('../handlers/ready.js') 
const fs = require('fs') 


String.prototype.toDDHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var days = '00'
    // nathan est moche
    if (hours > 24) {days = '01'; hours += -24}  
    if (hours > 48) {days = '02'; hours += -24}
    if (hours > 72) {days = '03'; hours += -24} 
    if (hours > 96) {days = '04'; hours += -24}  
    if (hours > 120) {days = '05'; hours += -24}  
    if (hours > 144) {days = '06'; hours += -24} 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    if(days && hours === '00') return minutes+':'+seconds
    if(days === '00') return hours+':'+minutes+':'+seconds 
    return days+':'+hours+':'+minutes+':'+seconds;
}
exports.run = async (bot, message, args, ops) => {
    if(message.author) return message.channel.send ('This module is broken if you can't wait the next major update (v4), you can join the support server and ask for invite alpha version in your server. or DM MTG#8211 directly.') 
    if(!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
    if(!args[0]) return message.channel.send('Sorry, please input a url following the command.')
    let validate = await oldytdl.validateURL(args[0]);
    if(!validate) return message.channel.send('Sorry, please input a ***VALID*** url following the command.');
    let info = await oldytdl.getInfo(args[0]);
    let data = ops.active.get(message.guild.id) || {};
    if(!data.connection) data.connection = await message.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;
    data.queue.push({
      songTitle: info.title,
      songDuration: info.length_seconds, 
      requester: message.author.username,
      url: args[0],
      cacheUrl: args[0], 
      announceChannel: message.channel.id
    });

   

if(!data.dispatcher) playStream(bot, ops, data);
else {
  var cache = data.queue[0].cacheUrl
  if(cache.includes('https://youtube.com')) {cache = cache.slice(19)} 
  const embed = new Discord.RichEmbed()
      .setTitle('**Added To Queue**')
      .setColor('3498DB')
      .setDescription(`:notes: __**Title:**__ [${info.title}](https://youtube.com${data.queue[0].cacheUrl})\n:eye_in_speech_bubble: __**Requested By:**__ ${message.author.username}#${message.author.discriminator}\n:clock1: __**Duration:**__ ${info.length_seconds.toDDHHMMSS()}`)
  message.channel.send({embed: embed})
}

ops.active.set(message.guild.id, data);

async function playStream(bot, ops, data) {
  var cache = data.queue[0].cacheUrl
  if(cache.includes('https://youtube.com')) {cache = cache.slice(19)}
  bot.channels.get(data.queue[0].announceChannel).send({embed: {
    color: 3447003,
    title: `**Now Playing**`,
    description: `:notes: __**Title:**__ [${data.queue[0].songTitle}](https://youtube.com${data.queue[0].cacheUrl})\n:eye_in_speech_bubble: __**Requested By:**__ ${data.queue[0].requester}\n:clock1: __**Duration:**__ ${(info.length_seconds).toDDHHMMSS()}`,
}});   

  data.dispatcher = await data.connection.playOpusStream(await ytdl(data.queue[0].url))
  data.dispatcher.guildID = data.guildID;
  data.dispatcher.once('end', function() {
    end(bot, ops, this);
  });
}

function end(bot, ops, dispatcher) {
    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();

    if(fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        playStream(bot, ops, fetched);

      } else {
        ops.active.delete(dispatcher.guildID);
        let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel;
        if (vc) vc.leave() 
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
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)

    .setThumbnail(message.author.displayAvatarURL)


bot.channels.get('503494406264061963').send(embed2);
}

exports.help = {name: "play", aliases: ['p']} 
