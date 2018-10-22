const Discord = require('discord.js');
const cpuStat = require('cpu-stat');

exports.run = (client, message, args, ops) => {
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const embedStats = new Discord.RichEmbed()
            .setColor('#507EDC')
            .addField("|-CPU-|", `\`${percent.toFixed(2)}%\``)  
        message.channel.send(embedStats)
    });
}
