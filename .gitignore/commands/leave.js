const ytld = require('ytdl-core');
const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
  if(!message.member.voiceChannel) return message.channel.send('Please connet to a voice channel.');
  if(!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot isn\'t connect to the guild.');
  if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, you aren\'t connected to the same channel.')
  message.guild.me.voiceChannel.leave();
  message.channel.send('leaving...')
}
