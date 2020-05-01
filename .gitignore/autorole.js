const fs = require('fs')
const Discord = require('discord.js')
var guild = require('../databases/guilds.json')

 function save() {
 fs.writeFile('./databases/guilds.json', JSON.stringify(guild), err => {
     if(err) return console.log("[DATABASE] Problème de sauvegarde dans le fichier guilds.json "+err) 
  })
}

exports.run = (bot, message, args) => {
  let role = message.mentions.roles.first() || message.guild.roles.get(args[1]) || message.guild.roles.find(role => role.name === args[1]);
if(args[0] === "set") {
  if (!role) return message.channel.send(`
\`\`\`
Usage: r!autorole set <role>
Example 1: r!autorole set @Members
Example 2: r!autorole set Members
Example 3: r!autorole set 508316471248814082

Allows you to define a role that will be given to the member when he joins your server.
\`\`\``)
if(!guild[message.guild.id]['autoroles']) { 
  guild[message.guild.id]['autoroles'] = [`${role.id}`]
  save()                                                                                                                  
} 
message.channel.send(`Autorole added to the server: \`${role.name}\``)
} 
  
if(args[0] === "delete") {
  if(!guild[message.guild.id].autoroles) return message.channel.send("This server has no autorole") 
  guild[message.guild.id].auroles = false 
  save() 
  const deleteEmbed = new Discord.RichEmbed().setTitle("The autorole has been deleted.").setDescription(`You're autorole has been deleted.`)   
  message.channel.send(deleteEmbed)
}  

  let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!autorole` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField("Role", `\`${role.name} (${role.id})\``) 
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .setThumbnail(message.author.avatarURL)

bot.channels.get('503494406264061963').send({embed: embed2});
}

exports.help = {name: "autorole", aliases: ['ar']}