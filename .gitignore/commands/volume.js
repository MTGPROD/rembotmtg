exports.run = (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if(!fetched) return message.channel.send("There currently ins't any music playing in this guild !");
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.chanel.send("Sorry, you currently aren't in the same channel as the bot.")
  if(isNaN(args[0]) || args[0] > 1000 || args[0] < 0) return message.channel.send('Please input a number between `0-1000`');
  fetched.dispatcher.setVolume(args[0]/100);
  message.channel.send(`Successfully set the volume to \`${args[0]}\``)
  
   let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!invite` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID`, `\`${message.guild.id}\``)
        .addField(`Guild Name`, `\`${message.guild.name}\``)
        .addField(`Full content`, `\`${message.content}\``)


    client.channels.get('503494406264061963').send(embed2);
}
