const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    if(!message.member.roles.find(r => r.name === 'Poll')) return message.channel.send(`This requires the role: \`Poll\``);
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMIN');
    if(!args[0]) return message.channel.send('Proper Usage: `r!poll` question');
    const embed = new Discord.RichEmbed()
        .setTitle(`Poll Created By ${message.author.username}`)
        .setDescription(args.join(' '))
        .setColor('#3395F7')
        .setFooter('React to vote.')

    let msg = await message.channel.send({embed: embed});

    await msg.react('✅');
    await msg.react('🔶');
    await msg.react('❌');

    message.delete({timeout: 1000});

    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!poll` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Question:`, `\`${args.join(` `)}\``)
    .setThubnail(message.author.displayAvatarURL)

client.channels.get('503494406264061963').send({embed: embed})
}
