const ascii = require('ascii-art');
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
  ascii.font(args.join(' '), 'Doom', function(rendered) {
  rendered = rendered.trimRight();
  if(rendered.length > 1800) return message.channel.send('Sorry, that message is too long !');
  message.channel.send(rendered, {
    code: 'md'
      });
  });
}


let embed2 = new Discord.RichEmbed()
.setTitle('Commande `r!ascii` a été utilisée !')
.addField(`User:`, `\`${message.author.username}\``)
.addField(`ID:`, `\`${message.author.id}\``)
.addField(`Discrinator`, `\`${message.author.discriminator}\``)
.addField(`Created At:`, `\`${message.author.createdAt}\``)
.addField(`GuildID`, `\`${message.guild.id}\``)
.addField(`Guild Name`, `\`${message.guild.name}\``)
.addField(`Full content`, `\`${message.content}\``)

client.channels.get('503494406264061963').send(embed2);
