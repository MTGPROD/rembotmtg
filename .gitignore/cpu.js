const Discord = require('discord.js');
const cpuStat = require('cpu-stat');

exports.run = (bot, message, args) => {
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }

        const embedStats = new Discord.RichEmbed()
        .setTitle('〘CPU〙')
        .setColor('#507EDC')
        .setDescription(`\`${percent.toFixed(2)}%\``)  
    message.channel.send({embed: embedStats}).then(msg => {
        var percentage = setInterval(function() {
            cpuStat.usagePercent(function(err, percent, seconds) {
                if (err) {
                    return console.log(err);
                }
                embedStats.setDescription(`\`${percent.toFixed(2)}%\``) 
                msg.edit({embed: embedStats})
            });
        }, 2000)
        setTimeout(() => {
          clearInterval(percentage) 
        }, 60 * 1000) 
    })
  })
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!cpu` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``) 
    .setThumbnail(message.author.avatarURL)
  
  bot.channels.get('503494406264061963').send({embed: embed2});

}

exports.help = {name: "cpu", aliases: []} 