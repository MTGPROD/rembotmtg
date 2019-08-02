const Discord = require('discord.js') 

exports.run = (client, message, args) => {
     const mainEmbed = new Discord.RichEmbed() 
         .setTitle('Vote for me on DBL')
         .setDescription('Click here => [<:discordbotlist:338808864352763904>](https://discordbots.org/bot/488734399509168148/vote)')
     message.channel.send(mainEmbed) 
     
        let embed2 = new Discord.RichEmbed()     .setTitle('Commande `r!vote` a été utilisée !')     .addField(`User:`, `\`${message.author.username}\``)     .addField(`ID:`, `\`${message.author.id}\``)     .setColor('#36393F')     .addField(`Discrinator:`, `\`${message.author.discriminator}\``)     .addField(`Created At:`, `\`${message.author.createdAt}\``)     .addField(`GuildID:`, `\`${message.guild.id}\``)     .addField(`Guild Name:`, `\`${message.guild.name}\``)     .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)     .addField(`Full content:`, `\`${message.content}\``)     .addField(`Anime research:`, `\`${args}\``)     .setThumbnail(message.author.avatarURL)  
client.channels.get('503494406264061963').send({embed: embed2});
} 
