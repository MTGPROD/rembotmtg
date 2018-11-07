const Discord = require("discord.js"); 
const infos = require('./infos.json');

exports.run = async (client, message, args) => { 

  let logs = message.guild.channels.find("name", "logs");
  if(!logs) return message.channel.send("Could not find a logs channel.");

  let user = message.mentions.users.first();
  if(!user) return message.reply("Please mention a user");

  let reason = args.join(" ");
  if(!reason) reason = "No reason given";

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() 
  .setTitle("User Banned")
  .setFooter(`${infos.version} User Ban Logs`, user.displayAvatarURL)
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Banned User:", `${user}, ID: ${user.id}`)
  .addField("Reason:", reason)
  .addField("Moderator:", `${message.author}, ID: ${message.author.id}`)
  .addField("Time:", message.createdAt)
  .addField("Channel:", message.channel)

  logs.send(logsEmbed);

  
  let embed2 = new Discord.RichEmbed()
  .setTitle('Commande `r!ban` a été utilisée !')
  .addField(`Moderator:`, `\`${message.author.username}\``)
  .setColor('#36393F')
  .addField(`ID:`, `\`${message.author.id}\``)
  .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
  .addField(`Created At:`, `\`${message.author.createdAt}\``)
  .addField(`GuildID:`, `\`${message.guild.id}\``)
  .addField(`Guild Name:`, `\`${message.guild.name}\``)
  .addField(`Full content:`, `\`${message.content}\``)
  .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
  .addField(`Member banned:`, `\`${user}\``)
  .addField(`Reason:`, `\`${reason}\``)
  .setThumbnail(message.author.avatarURL)


client.channels.get('503494406264061963').send(embed2);
  
}
