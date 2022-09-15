const Discord = require('discord.js');
const infos = require('../databases/infos.json');
const help = require('../databases/help.json')

exports.run = async (bot, message, args) => {
    
    // Array of responses
    let responses = [
        'Agreed !',
        'Of Course !',
        'Nope.',
        'No',
        'Maybe',
        'One day...',
        'Don\'t see that happening !',
        'I have no idea'
    ]
    
if(!args.join(` `)) return message.channel.send(`
\`\`\`
${help.cmds_help_8ball}
\`\`\`
`)
    
    
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    const embed = new Discord.MessageEmbed()
  
    .setTitle(":8ball: 8ball") 
        .setColor(infos.color)
        .setDescription(fetched)
        .setFooter(message.author.username+"#"+message.author.discriminator+` - ${infos.version}`, message.author.displayAvatarURL);
    
    message.channel.send(embed);

    let embed2 = new Discord.MessageEmbed()
    .setTitle('Commande `r!8ball` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Responce:`, `\`${fetched}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .setThumbnail(message.author.avatarURL)



bot.channels.get('503494406264061963').send({embed: embed2});    
}

exports.help = {name: '8ball', aliases: ['8']}