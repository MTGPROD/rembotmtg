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
      .addFields([
        {
          name: ':flag_us: English Title',
          value: data.englishTitle+".",
          inline: true
        },
        {
          name: ':flag_jp: Japanese Title',
          value: data.japaneseTitle+".",
          inline: true
        },
        {
          name: 'Type',
          value: data.type,
          inline: true
        },
        {
          name: ':star: Rating',
          value: data.rating,
          inline: true
        },
        {
          name: ':clock: Aired',
          value: data.aired,
          inline: true
        },
        {
          name: ':star: Score',
          value: data.score,
          inline: true
        },
        {
          name: ':one: Score',
          value: data.score,
          inline: true
        },
        {
          name: ':link: Link',
          value: data.url,
          inline: true
        },
      ])
      .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL })

      message.channel.send(malEmbed);
    })
    .catch((err) => message.channel.send(err));


client.channels.get('503494406264061963').send({embed: embed2});

}

exports.help = {
  name: "anime", 
  aliases: []
} 