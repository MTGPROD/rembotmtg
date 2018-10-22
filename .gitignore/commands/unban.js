const Discord = require("discord.js"); 
exports.run = async (client, message, args) => { 

  let logs = message.guild.channels.find("name", "logs");
  if(!logs) return message.channel.send("Could not find a logs channel.");

  let user = message.mentions.users.first();
  if(!user) return message.reply("Please mention a user");

  let reason = args.join(" ");
  if(!reason) reason = "No reason given";

  message.guild.member(user).unban(reason);

  let logsEmbed = new Discord.RichEmbed() 
  .setTitle("User UnBanned")
  .setFooter("User UnBan Logs")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("UnBanned User:", `${user}, ID: ${user.id}`)
  .addField("Reason:", reason)
  .addField("Moderator:", `${message.author}, ID: ${message.author.id}`)
  .addField("Time:", message.createdAt)
  .addField("Channel:", message.channel)

  logs.send(logsEmbed);
  
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
