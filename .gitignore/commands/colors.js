const Discord = require('discord.js');
const infos = require('./infos.json');

exports.run = async (client, message, args, ops) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send({embed: {
            color: 3447003,
            title: ':x: **Error:** No colors',
            description: 'There are no colors in this server. It\'s so sad ! 😭\n Usage: For me to detect "color" roles it is necessary that the roles start with "#" and to have this role type \n`r!color rolename`',
    }});

    	const embed = new Discord.RichEmbed()
    		.setTitle("All colors available !")
    		.setURL('https://google.com')
    		.setDescription(colors.array().join("\n"))
                    .setColor('#d4af37')
                    .setFooter(infos.version, client.user.displayAvatarURL)

    		message.channel.send(embed);
              
        const embedwithcolor = new Discord.RichEmbed()
                .addField('How to give you a color ?', 'To give you a color, type ' +  `${infos.prefix}color colorname`)
                .setColor('#d4af37')
                .setFooter(infos.version, client.user.displayAvatarURL)

                message.channel.send(embedwithcolor);
}


