const Discord = require('discord.js');
const cmds = require('./commands');

exports.run = (client, message, args, ops) => {
    var pages = [`**Basics:**\n\`avatar | help | ping | poll | post | roleinfo\``, `**Fun:**\n\`8ball | animes | ascii | cat | hug | kiss | memes | urban\``, `**Music:**\n\`leave | pause | play | queue | resume | search | skip | spotify | volume\``, `**Games:**\n\`csgo | fortnite\``, `**Moderation:**\n\`ban | mute | unmute | purge\``, `**Others**:\n\`b64encode | b64decode | botstats | calc | color | colors | findusers\``];
    var page = 1;

    const embed = new Discord.RichEmbed()
        .setTitle(`Help requested by **${message.author.username}**`)
        .setURL('https://google.com/')
        .setColor('#329FFE')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {

        msg.react('⏪').then( r => {
            msg.react('⏩')

            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

            const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

            backwards.on('collect', r => {
                if(page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })

            forwards.on('collect', r => {
                if(page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
                
            })

        })

    })
    
    
        
        
 let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!neohelp` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .setThumbnail(message.author.avatarURL)

client.channels.get('503494406264061963').send(embed2);

//⏪⏩
