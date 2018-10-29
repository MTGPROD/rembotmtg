const Discord = require("discord.js")
const infos = require('./infos.json')

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

exports.run = (client, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor(client.user.username)
            .setTitle("***BOT Stats***")
            .setColor("RANDOM")
            .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("• Uptime ", `${duration}`, true)
            .addField("• Users", `${client.users.size.toLocaleString()}`, true)
            .addField("• Servers", `${client.guilds.size.toLocaleString()}`, true)
            .addField("• Channels ", `${client.channels.size.toLocaleString()}`, true)
            .addField("• Discord.js", `v${version}`, true)
            .addField("• Node", `${process.version}`, true)
            .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("• CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField("• Arch", `\`${os.arch()}\``, true)
            .addField("• Platform", `\`\`${os.platform()}\`\``, true)
            .addField("• API Latency", `${Math.round(client.ping)}ms`)  
            .setFooter(infos.version, client.user.displayAvatarURL)
        message.channel.send(embedStats)
    });

let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!botstats` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .setThumbnail(message.author.avatarURL)
 
  client.channels.get('503494406264061963').send(embed2);
};

