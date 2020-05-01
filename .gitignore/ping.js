const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(':heartbeat: API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField(':robot: Bot Ping : ', Math.floor(botping) + 'ms')
        .addField(':envelope: Message Ping : ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`Requested by ${message.author.tag}`);

        
    message.channel.send(pingembed);
    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!ping` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .setThumbnail(message.author.avatarURL)


bot.channels.get('503494406264061963').send({embed: embed2})
       
};

exports.help = {name: "ping", aliases: []} 