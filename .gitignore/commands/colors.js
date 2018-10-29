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
    		.setTitle(`All colors available ! ${colors.size} colors`)
    		.setURL('https://google.com')
    		.setDescription(colors.array().join("\n"))
                    .setColor('#d4af37')
                    .setFooter(infos.version, client.user.displayAvatarURL)

    		message.channel.send(embed);
              
        const embedwithcolor = new Discord.RichEmbed()
                .addField('How to give you a color ?', 'To give you a color, type ' +  `\`${infos.prefix}color colorname\``)
                .setColor('#d4af37')
                .setFooter(infos.version, client.user.displayAvatarURL)

                message.channel.send(embedwithcolor);


                let embed2 = new Discord.RichEmbed()
                .setTitle('Commande `r!colors` a été utilisée !')
                .addField(`User:`, `\`${message.author.username}\``)
                .addField(`ID:`, `\`${message.author.id}\``)
                .addField(`Discrinator`, `\`${message.author.discriminator}\``)
                .addField(`Created At:`, `\`${message.author.createdAt}\``)
                .addField(`GuildID`, `\`${message.guild.id}\``)
                .addField(`Guild Name`, `\`${message.guild.name}\``)
                .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
                .addField(`Full content`, `\`${message.content}\``) 
                .addField(`Colors`, `\`${colors.array().join("\n")}\``) 
                .setThumbnail(message.author.avatarURL)
              
              client.channels.get('503494406264061963').send(embed2);
            
}

