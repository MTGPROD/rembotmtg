const Discord = require('discord.js');
const infos = require('./infos.json')

exports.run = async (client, message, args, ops) => {
    if(args[0] === 'setup') {
        var msg = message.channel.send('I setup the colors')
          message.guild.createRole({ name: '#red', color: '#D40C00', })
          msg.edit('Finished, you use `r!colors`')
    } else {
    
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send({embed: {
            color: 3447003,
            title: ':x: **Error:** No colors',
            description: "There are no color roles in this server, you can create color yourself ou use `r!color setup`",
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
        const colorgive = new Discord.RichEmbed()
        .setDescription(`You now have the color ${role} !`)
        await message.member.removeRoles(colors);
        await message.member.addRole(role);
        message.channel.send(colorgive);
    } catch(e) {
        const error = new Discord.RichEmbed()
        .setDescription(`Operation failed ! ${e.message}, if you have missing permissions, pls give me the \`MANAGE_ROLES\` permission and try again.`)
        message.channel.send(error);
    }
    } 

    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!color` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``) 
    .addField(`Role:`, `\`${role}\``) 
    .setThumbnail(message.author.avatarURL)
  
  client.channels.get('503494406264061963').send({embed: embed2});

}


