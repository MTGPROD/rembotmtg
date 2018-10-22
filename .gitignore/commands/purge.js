const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
   if(isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
   if(args[0] > 100) return message.channel.send('**Please supply a number less then 100**')
   message.channel.bulkDelete(args[0])
    .then( messages => message.channel.send(`**Successfully deleted \`${message.size}/${args[0]}\` messages**`).then( msg => msg.delete({ timeout: 10000 })))
        .catch(error => message.channel.send(`**:x: ERROR:** ${error.message}`));
   
    let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!purge` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID`, `\`${message.guild.id}\``)
        .addField(`Guild Name`, `\`${message.guild.name}\``)
        .addField(`Full content`, `\`${message.content}\``)
        .addField(`Messages cleared`, `\`${message.size}\``)


    client.channels.get('503494406264061963').send(embed2);
}
