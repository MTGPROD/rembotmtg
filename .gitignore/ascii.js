const ascii = require('ascii-art');
const Discord = require('discord.js');
const help = require('../databases/help.json') 

exports.run = (bot, message, args) => {
  if(!args.join(' ')) return message.channel.send(`
\`\`\`
${help.cmds_help_ascii}
\`\`\``)   
  ascii.font(args.join(` `), 'Doom', function(rendered) {
  rendered = rendered.trimRight();
  if(rendered.length > 1950) return message.channel.send('Sorry, that message is too long !');
  message.channel.send(rendered, {
    code: 'md'
    

      });
  });



let embed2 = new Discord.RichEmbed()
.setTitle('Commande `r!ascii` a été utilisée !')
.setColor('#36393F')
.addField(`User:`, `\`${message.author.username}\``)
.addField(`ID:`, `\`${message.author.id}\``)
.addField(`Discriminator:`, `\`${message.author.discriminator}\``)
.addField(`Created At:`, `\`${message.author.createdAt}\``)
.addField(`GuildID:`, `\`${message.guild.id}\``)
.addField(`Guild Name:`, `\`${message.guild.name}\``)
.addField(`Full content:`, `\`${message.content}\``)
.addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
.setThumbnail(message.author.avatarURL)

bot.channels.get('503494406264061963').send({embed: embed2});
}

exports.help = {name: "ascii", aliases: []}  