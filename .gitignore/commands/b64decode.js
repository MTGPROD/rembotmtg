const base64 = require("js-base64").Base64;

module.exports.run = async (bot, message, args) => {
    const b64Decoded = base64.decode(args.join(" "));
    message.channel.send(`\`\`\`\n${b64Decoded}\`\`\``);

    
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!b64decode` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID`, `\`${message.guild.id}\``)
    .addField(`Guild Name`, `\`${message.guild.name}\``)
    .addField(`Full content`, `\`${message.content}\``)
    .addField(`Output`, `\`${b64Decoded}\``)


client.channels.get('503494406264061963').send(embed2);
    
}
