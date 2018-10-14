const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    if(!message.member.roles.find(r => r.name === 'Poll')) return message.channel.send(`This requires the role: \`Poll\``);
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMIN');
    if(!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');
    const embed = new Discord.RichEmbed()
        .setTitle(`Poll Created By ${message.author.username}`)
        .setDescription(args.join(' '))
        .setColor('#3395F7')
        .setFooter('React to vote.')

    let msg = await message.channel.send({embed: embed});

    await msg.react('✅');
    await msg.react('🔶');
    await msg.react('❌');

    message.detele({timeout: 1000});
}
