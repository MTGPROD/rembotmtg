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
  
  message.react('508323953979162653')
  
   let embed2 = new Discord.RichEmbed()
        .setTitle('Synchronisation effectuée')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Users:`, `\`${client.guilds.reduce((a, g) => a + g.memberCount, 0)}\``)
        .addField(`Guilds:`, `\`${client.guilds.size}\``)
        .addField(`Channels:`, `\`${client.channels.size}\``)
        .setThumbnail(message.author.displayAvatarURL)
      
    client.channels.get('503494406264061963').send({embed: embed2});
}
