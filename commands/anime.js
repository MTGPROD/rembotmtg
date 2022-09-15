const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const help = require('../databases/help.json') 

exports.run = async (client, message, args) => {

  const search = `${args}`;
  
if(!search) return message.channel.send(
`\`\`\`
${help.cmds_help_anime}
\`\`\``)

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#36393F')
      .addField(':flag_us: English Title', data.englishTitle+".", true)
      .addField(':flag_jp: Japanese Title', data.japaneseTitle+".", true)
      .addField('Type', data.type, true)
      .addField(':tv: Episodes', data.episodes, true)
      .addField(':star: Rating', data.rating, true)
      .addField(':clock: Aired', data.aired, true)
      .addField(':star: Score', data.score, true)
      .addField(':one: Score Stats', data.scoreStats, true)
      .addField(':link: Link', data.url)
      .setFooter(client.user.username, client.user.displayAvatarURL)


      message.channel.send(malEmbed);

      console.log(data);
    })
    .catch((err) => message.channel.send(err));


client.channels.get('503494406264061963').send({embed: embed2});

}

exports.help = {
  name: "anime", 
  aliases: []
} 