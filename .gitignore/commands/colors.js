const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send({embed: {
            color: 3447003,
            title: ':x: **Error:**',
            description: "There are no colors in this server. It's so sad ! 😭",
    }});

    	const embed = new Discord.RichEmbed()
    		.setTitle("All colors available !")
    		.setURL('https://google.com')
    		.setDescription(colors.array().join("\n"))
    		.setColor('#d4af37')

    		message.channel.send({embed: embed});
              
        const embedwithcolor = new Discord.RichEmbed()
                .addField('How to give a color ?', 'To give you a color, type `!color <color>`')
                .setColor('#d4af37')
                .setFooter(new Date() + ' Rem 2.0')

                message.channel.send({embed: embedwithcolor})
}


