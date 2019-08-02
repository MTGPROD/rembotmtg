const Discord = require('discord.js') 

exports.run = (client, message, args) => {
const changelog = new Discord.RichEmbed() 
.setTitle("Patch notes of 02/08/19 **3.0b => 3.1s**") 
.setDescription(
`
\`Patch notes 02/08/19\`  **3.0b => 3.1s**
>>> This is the last patch before the new version of Rem (4.0v). Others bugs will be fixed in the next big update. Stay tuned
\`\`\`
* memes: has been renamed to meme
* ping: UI fix
* avatar: UI fix after loading
- poll: No longer requires the Poll role to operate.
- poll:  No longer asks to add a name to the poll.
- me: removed
- guildinfo: removed
- guildname: removed
- pictures: removed
- google: removed
+ ban: Permissions check for user and client, security improved. 
* 8ball: new help response.
* ascii: help response bug fix
- music module: it broken please wait next update. 
+ new command: changelog
+ help: UI fix & changes
+ help: new catalog
+ activity: new texts
* animes: renamed to anime
\`\`\`
`
)
message.channel.send(changelog)

   let embed2 = new Discord.RichEmbed()     .setTitle('Commande `r!changelog` a été utilisée !')     .addField(`User:`, `\`${message.author.username}\``)     .addField(`ID:`, `\`${message.author.id}\``)     .setColor('#36393F')     .addField(`Discrinator:`, `\`${message.author.discriminator}\``)     .addField(`Created At:`, `\`${message.author.createdAt}\``)     .addField(`GuildID:`, `\`${message.guild.id}\``)     .addField(`Guild Name:`, `\`${message.guild.name}\``)     .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)     .addField(`Full content:`, `\`${message.content}\``)     .addField(`Anime research:`, `\`${args}\``)     .setThumbnail(message.author.avatarURL)  
client.channels.get('503494406264061963').send({embed: embed2});
} 
