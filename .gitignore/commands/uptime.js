const Discord = require("discord.js");
const moment = require("moment");

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



    let prefix = 'r!';
    if (!message.content.startsWith(prefix)) return;




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
}

