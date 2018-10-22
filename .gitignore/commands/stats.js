const Discord = require('discord.js');

const serverStats = {
  guildID: '489426595166158885',
  totalUsersID: '500691885816545290',
  memberCountID: '500691902186782750',
  botCountID: '500691956851015690',
}

const botStats = {
  totalGuildsID: '500718077391011840',
  totalUsersID: '500717819466481684',
  totalChannelsID:'500718175139266566'
}

exports.run = async (client, message, args, ops) => {
  client.channels.get(botStats.totalGuildsID).setName(`Total Guilds : ${client.guilds.size}`);
  client.channels.get(botStats.totalUsersID).setName(`Total Users : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`);
  client.channels.get(botStats.totalChannelsID).setName(`Total Channels : ${client.channels.size}`);
  
  message.react('498248476929425409')
  
   let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!stats` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID`, `\`${message.guild.id}\``)
        .addField(`Guild Name`, `\`${message.guild.name}\``)
        .addField(`Full content`, `\`${message.content}\``)


    client.channels.get('503494406264061963').send(embed2);
}
