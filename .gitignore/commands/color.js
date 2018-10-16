const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send({embed: {
            color: 3447003,
            title: ':x: **Error:**',
            description: "There are no colors in this server. It's so sad ! 😭",
    }});   

    let str = args.join(" ");
    let role = colors.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

    if(!role) return message.channel.send({embed: {
            color: 3447003,
            title: '**How to use `!color`**',
            description:':x: **Error: bad/no args** \n\nTo give you a color **TYPE** `r!color colorname`',
            footer: {
                text: ` Rem 2.0`
            }
    }});
/*':x: **Error201: bad args**,' 'To give you a color **TYPE** `!color colorname`',*/
    try {
        await message.member.removeRoles(colors);
        await message.member.addRole(role);
        message.channel.send(`You now have the color ${role} !`);
    } catch(e) {
        message.channel.send(`Operation failed ! ${e.message}`);
    }

}

