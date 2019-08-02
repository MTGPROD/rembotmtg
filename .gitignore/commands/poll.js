const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
   // if(!message.member.roles.find(r => r.name === 'Poll')) return message.channel.send(`This requires the role: \`Poll\``);
   // if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMIN');
    var question = args.join(' ')
    if(!args.join(' ')) return message.channel.send('Usage: `r!poll <question> <name>`');
    var name = args.join(' ').slice(question.length + 1)
    const embed = new Discord.RichEmbed()
        .setTitle(name)
        .setDescription(question)
        .setColor(message.member.highestRole.hexColor)
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
