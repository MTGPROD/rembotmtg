const Discord = require("discord.js");
const malScraper = require('mal-scraper');
//const infos = require('../databases/infos.json')
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

  let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!anime` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .setColor('BLUE')
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Anime research:`, `\`${args}\``)
    .setThumbnail(message.author.avatarURL)


client.channels.get('503494406264061963').send({embed: embed2});

}

exports.help = {
  name: "anime", 
  aliases: []
} 