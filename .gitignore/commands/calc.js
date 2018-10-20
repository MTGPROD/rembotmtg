const Discord = require('discord.js');
const math = require('mathjs');
const infos = require('./infos.json');

exports.run = async (client, message, args, tools) => {
    if(!args[0]) return message.channel.send('Please input a calculation.\n`EX: r!calc 78 * 54 or 4 + 6 etc...`');
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send('Sorry, please input a ***VALID*** calculation.');
    }

    const embed = new Discord.RichEmbed()
        .setColor('#3395F7')
        .setTitle('Math Calculation')
        .addField('Input', `\`\`\`JS\n${args.join(' ')}\`\`\``)
        .addField('Output', `\`\`\`JS\n${resp}\`\`\``)
        .setFooter(infos.version, client.user.displayAvatarURL)

    message.channel.send(embed);
}
