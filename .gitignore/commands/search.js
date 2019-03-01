const search = require('yt-search');
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
  search(args.join(' '), function(err, res) {
    if(err) return message.channel.send('Sorry, something wen wrong.');
    let videos = res.videos.slice(0, 5);
    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
    let resp = '';
    for(var i in videos) {
      resp += `**[${parseInt(i)+1}]:** - [${videos[i].title}](${this.videos[parseInt(m.content)-1]})\n`;
    }
    resp += `\n**Choose a number between** \`1-${videos.length}\``;
    const embed = new Discord.RichEmbed()
        .setTitle('The results of the search')
        .setDescription(resp)
        .setColor('RANDOM')
        .setTimestamp()

    message.channel.send(embed);
   
    const collector = message.channel.createMessageCollector(filter);
    collector.videos = videos;
    collector.once('collect', function(m) {
      let commandFile = require('./play.js');
      commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
    });
  });
  
   let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!search` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel:`, `#\`${message.channel.name} (${message.channel.id})\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .setThumbnail(message.author.avatarURL)


    client.channels.get('503494406264061963').send({embed: embed2});
}

