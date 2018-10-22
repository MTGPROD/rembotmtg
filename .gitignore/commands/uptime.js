const Discord = require("discord.js");
const moment = require("moment");
const infos = require('./infos');

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};



exports.run = (client, message, args) => {
    if(message.author.id === infos.owners.MTG || infos.owners.Xeno) {
        
    if (!message.content.startsWith(infos.prefix)) return;




    let u = convertMS(client.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"




    const duration = moment.duration(client.uptime)
    let bicon = client.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .addBlankField()
        .setColor(`RANDOM`)
        .addField(`Uptime`, `**Uptime :**  ${uptime}`)
        .setThumbnail(bicon);

    message.channel.send(botembed);
        
         let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!invite` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID`, `\`${message.guild.id}\``)
        .addField(`Guild Name`, `\`${message.guild.name}\``)
        .addField(`Full content`, `\`${message.content}\``)


    client.channels.get('503494406264061963').send(embed2);
}

