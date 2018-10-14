const Discord = require('discord.js');
const math = require('mathjs');

exports.run = async (client, message, args, tools) => {
    if(!args[0]) return message.channel.send('Please input a calculation.');
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

    message.channel.send({embed: embed});
}
