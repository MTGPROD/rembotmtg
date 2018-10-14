exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.channel.send('There currently isn\'t any music playing in this guild !');
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you aren't in the same channel as the music bot.");
    if(fetched.dispatcher.resume) return message.channel.send('This music ins\'t paused');
    if(fetched.dispatcher.paused) return fetched.dispatcher.resume() && message.channel.send(`Successfully resumed ${fetched.queue[0].songTitle}`);/*message.channel.send('This music ins\'t paused');*/
    
  }
