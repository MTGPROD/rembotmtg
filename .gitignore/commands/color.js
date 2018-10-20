const Discord = require('discord.js');
const infos = require('./infos.json')

exports.run = async (client, message, args, ops) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send({embed: {
            color: 3447003,
            title: ':x: **Error:** No colors',
            description: "There are no colors in this server. It's so sad ! 😭",
    }});   

    let str = args.join(" ");
    let role = colors.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

    if(!role) return message.channel.send({embed: {
            color: 3447003,
            title: ':x: **Error: bad/no args**',
            description:'To give you a color **TYPE** `r!color colorname`',
            footer: {
                text: infos.version,
                icon: client.user.displayAvatarURL
            }
    }});

    try {
        await message.member.removeRoles(colors);
        await message.member.addRole(role);
        message.channel.send(`You now have the color ${role} !`);
    } catch(e) {
        message.channel.send(`Operation failed ! ${e.message}`);
    }

}

