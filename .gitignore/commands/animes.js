const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const infos = require('./infos.json')

module.exports.run = async (client, message, args) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      //.setThumbnail(data.picture)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('English Title', data.englishTitle, true)
      .addField('Japanese Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('Rating', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField(':star: Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)

      .addField('Link', data.url)
      .setThumbnail(data.picture)
      .setFooter(infos.version, client.user.displayAvatarURL)


      message.channel.send(malEmbed);

      console.log(data);
    })
    .catch((err) => console.log(err));

  let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!animes` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID`, `\`${message.guild.id}\``)
    .addField(`Guild Name`, `\`${message.guild.name}\``)
    .addField(`Channel`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content`, `\`${message.content}\``)
    .addField(`Anime research`, `\`${args}\``)


client.channels.get('503494406264061963').send(embed2);

}
