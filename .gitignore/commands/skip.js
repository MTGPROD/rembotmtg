exports.run = async (client, message, args, ops) => {
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
    message.channel.send('Successfully skipped song !');
    return fetched.dispatcher.emit('end');
  }

  message.channel.send(`Successfully voted to skip ! ${fetched.queue[0].voteSkips.length}/${require} required`);
}
