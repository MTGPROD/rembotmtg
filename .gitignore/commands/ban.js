const Discord = require("discord.js"); 
const infos = require('./infos.json');

exports.run = async (client, message, args) => { 

  
  

  let user = message.mentions.users.first();
  if(!user) return message.channel.send("Please mention a user");

  if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send("You can't ban members you haven't the `BAN_MEMBERS` permission.") 
  if(message.guild.me.permissions.has('BAN_MEMBERS')) return message.channel.send("I can't ban members (i lack the `BAN_MEMBERS` permission)")
  
  let reason = args.join(" ");
  if(!reason) reason = `${message.author.username}#${message.author.discriminator} ban ${user.username}#${user.discriminator}`;

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() 
  .setTitle("User Banned")
  .setFooter(`${infos.version}`, user.displayAvatarURL)
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Banned User:", `${user}, ID: ${user.id}`)
  .addField("Reason:", reason)
  .addField("Moderator:", `${message.author}, ID: ${message.author.id}`)
  .addField("Time:", message.createdAt)
  .addField("Channel:", message.channel)

  message.channel.send(logsEmbed);

  
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


client.channels.get('503494406264061963').send({embed: embed2});
  
}
