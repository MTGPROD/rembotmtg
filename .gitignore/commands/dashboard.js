const Discord = require("discord.js")
const infos = require('./infos.json')

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

exports.run = (client, message, args) => {

    var cooldown = false

    if(cooldown === true) {
        message.channel.send('Vous êtes en cooldown')
    }

    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }

        cooldown = true

    const embed = new Discord.RichEmbed()
        .setTitle('Loading <a:loader:508323902531960872>')
        .setColor('#507EDC')
        .setImage('https://cdn.discordapp.com/attachments/503494406264061963/508315779993829427/Double_Ring-1s-200px.gif')
        .setFooter('For performance reasons the message will be deleted after 30 seconds')
        message.channel.send({embed: embed}).then(msg => {
            setInterval(function() {
                cpuStat.usagePercent(function(err, percent, seconds) {
                    if (err) {
                        return console.log(err);
                    }
                    /*embed.addField('<:cpu:508433916470755348> CPU', `\`${percent.toFixed(2)}%\``, true)
                    embed.addField('<:RAM:508437019408465948> RAM', `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)
                    embed.addField('<:ping:508440057217286144> Latency', `\`${Math.round(client.ping)}ms\``, true)
                    embed.addField("<:node:508442450205999108> Node", `${process.version}`, true)*/
                    embed.setTitle('Welcome to the dashboard')
                    embed.setDescription(`<:cpu:508433916470755348> **CPU** \`${percent.toFixed(2)}%\`      \n\n<:RAM:508437019408465948> **RAM** \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\`     \n\n<:ping:508440057217286144> **Latency** \`${Math.round(client.ping)}ms\`     \n\n<:node:508442450205999108> **Node** \`${process.version}\``)
                    embed.setImage('')
                    msg.edit({embed: embed})
                
                });
            }, 2000)
            msg.delete(30000)
            cooldown = false
            
 })       
})
}

