const Discord = require("discord.js"); 
exports.run = async (client, message, args) => { 

  if(args[0].length < 18) return message.channel.send(`**${args[0]}** is not a valid id.`) 
  if(args[0] === isNaN) return message.channel.send(`**${args[0]}** is not a valid id.`) 
  if(args[0].length > 18) return message.channel.send(`**${args[0]}** is not a valid id.) 
                                                      
  

  let user = args[0] 
  if(!user) return message.reply("Usage: \`r!unban <id>\`");

  let reason = args.join(" ");
  if(!reason) reason = "No reason given";

  message.guild.member(user).unban(reason);

  

  message.channel.send(`You give a second chance to \`**${args[0]}**\` he shouldn't waste it.`) 
  
   let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!unban` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .setThumbnail(message.author.avatarURL)


    client.channels.get('503494406264061963').send({embed: embed2});
}
