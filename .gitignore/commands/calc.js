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
        .setColor('#36393F')
        .setTitle('Math Calculation')
        .addField('Input', `\`\`\`JS\n${args.join(' ')}\`\`\``)
        .addField('Output', `\`\`\`JS\n${resp}\`\`\``)
        .setFooter(infos.version, client.user.displayAvatarURL)

    message.channel.send(embed);

let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!calc` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
    .addField(`Input:`, `\`${args.join(` `)}\``)
    .addField(`Output:`, `\`${resp}\``)
    .setThumbnail(message.author.avatarURL)
  
  
  client.channels.get('503494406264061963').send(embed2);
}
