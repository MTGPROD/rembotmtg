const Discord = require('discord.js');
const infos = require('./infos.json')

exports.run = async (client, message, args, ops) => {
    
        if(args[0] === 'delete') {
            message.guild.roles.find("name", "#red").delete()
            message.guild.roles.find("name","#Light Red").delete()
            message.channel.send('Succès') 
        } 
        if(args[0] === 'setup') {
        message.channel.send('I setup the colors, use `r!colors`')
          message.guild.createRole({ name: '#Red', color: '#D40C00', })
          message.guild.createRole({name: '#Light Red', color: '#FF9A00'})
          message.guild.createRole({name: '#Deep orange', color: '#FF5500'})
          message.guild.createRole({name: '#Orange', color: '#ffa202'})
          message.guild.createRole({name: '#Amber', color: '#FFCD00'})  
          message.guild.createRole({name: '#Yellow', color: '#FFEF00'})
          message.guild.createRole({name: '#Lime', color: '#CDE000'})
          message.guild.createRole({name: '#Light Green', color: '#87C735'})
          message.guild.createRole({name: '#Green', color: '#32C12C'})  
          message.guild.createRole({name: '#Teal', color: '#009888'})
          message.guild.createRole({name: '#Blue', color: '#526EFF'})
          message.guild.createRole({name: '#Light Blue', color: '#00A5F9'})
          message.guild.createRole({name: '#Cyan', color: '#00BCD9'})
          message.guild.createRole({name: '#Indigo', color: '#3E49BB'})
          message.guild.createRole({name: '#Purple', color: '#7F4FC9'})
          message.guild.createRole({name: '#Deep Purple', color: '#682CBF'})
          message.guild.createRole({name: '#Brown', color: '#7C5547'})
          message.guild.createRole({name: '#Deep Brown', color: '#50342C'})
          message.guild.createRole({name: '#Grey', color: '#9E9E9E9'})
          message.guild.createRole({name: '#Blue Grey', color: '#5F7D8E'})
        
    } else {
    
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send({embed: {
            color: 3447003,
            title: ':x: **Error:** No colors',
            description: "There are no color roles in this server, you can create colors yourself or use `r!color setup`",
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


