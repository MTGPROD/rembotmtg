const Discord = require('discord.js');
const infos = require('./infos.json');

exports.run = async (client, message, args, tools) => {
    
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
    
    if(!args.join(` `)) return message.channel.send("Usage: `r!8ball <question>`") 
    
    
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(fetched)
        .setFooter(infos.version, client.user.displayAvatarURL);
    
    message.channel.send(embed);

    let embed2 = new Discord.RichEmbed()
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



client.channels.get('503494406264061963').send({embed: embed2});
    
}
