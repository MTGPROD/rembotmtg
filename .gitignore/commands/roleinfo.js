const { RichEmbed } = require('discord.js');
exports.run = (client, message, args) => {
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);
    if (!role) role = message.member.highestRole;

    const embed = new RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Role: ${role.name}`)
        .addField('Members', role.members.size, true)
        .addField('Hex', role.hexColor, true)
        .addField('Creation Date', role.createdAt.toDateString(), true)
        .addField('Editable', role.editable.toString(), true)
        .addField('Managed', role.managed.toString(), true)
        .addField('ID', role.id, true);
    message.channel.send({embed: embed});
    
     let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!roleinfo` a été utilisée !')
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
};
