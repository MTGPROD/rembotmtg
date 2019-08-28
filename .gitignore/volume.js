const Discord = require('discord.js')


exports.run = (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if(!fetched) return message.channel.send("There currently ins't any music playing in this guild !");
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.chanel.send("Sorry, you currently aren't in the same channel as the bot.")
  const skip = new Discord.RichEmbed()
       .setDescription(`:speaker: ${args[0]}%`) 
  if(isNaN(args[0]) || args[0] > 100 || args[0] < 0) return message.channel.send('Usage: `r!volume <0-100>`')
  fetched.dispatcher.setVolume(args[0]/100);
 
 message.channel.send(skip)
  
   let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!volume` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .addField(`Volume:`, `\`${args[0]}\``)
        .setThumbnail(message.author.displayAvatarURL)


    bot.channels.get('503494406264061963').send(embed2);
}

exports.help = {name: 'volume', aliases: ['vol', 'v']}