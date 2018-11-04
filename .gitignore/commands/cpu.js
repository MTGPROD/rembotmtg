const Discord = require('discord.js');
const cpuStat = require('cpu-stat');

exports.run = (client, message, args, ops) => {
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }

        const embedStats = new Discord.RichEmbed()
        .setTitle('|-CPU-|')
        .setColor('#507EDC')
        .setDescription(`\`${percent.toFixed(2)}%\``)  
    message.channel.send({embed: embedStats}).then(msg => {
        setInterval(function() {
            cpuStat.usagePercent(function(err, percent, seconds) {
                if (err) {
                    return console.log(err);
                }
                embedStats.setDescription(`\`${percent.toFixed(2)}%\``) 
                msg.edit({embed: embedStats})
            });
        }, 2000)
        msg.delete(60000)
    })
  })

}
