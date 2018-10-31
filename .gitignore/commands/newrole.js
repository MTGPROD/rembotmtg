const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    
    let name = args[0];
    let color = args[1];
    let mentionable = args[2];
    let hoist = args[3];
    let position =  args[4];

    if(!name) return message.channel.send('Please input a name/color/mentionable: true/false hoist: true/false position: number')
    if(!name === isNaN) return message.channel.send(position + ' is not a number')

    message.guild.createRole({
        name: name,
        color: color,
        mentionable: mentionable,
        hoist: hoist,
        position: position,
    })
    .then(role => message.channel.send(embed))
    .catch(console.error);

    const embed = new Discord.RichEmbed()
        .setTitle(`Role ${name} created`)
        .addField(`Name:`, `${name}`)
        .addField(`Color:`, `${color}`)
        .addField(`Mentionable:`, `${mentionable}`)
        .addField(`Hoist:`, `${hoist}`)
        .addField(`position:`, `${position}`)
        
    let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!newrole` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel`, `\`${message}\``)
        .addField(`Full content:`, `\`${message.content}\``)


    client.channels.get('503494406264061963').send(embed2);
}
