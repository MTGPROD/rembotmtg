const Discord = require('discord.js')

exports.run = (client, message, args) => {
     
     var API = [
          "[**Cute Dog | Decapitated Head**](https://www.reddit.com/r/FiftyFifty/comments/aqbt1r/5050_cute_dog_sfw_decapitated_head_nsfw/)" 
     ] 
     
     let fetched = API[Math.floor(Math.random() * API.length)];
     
     const mainEmbed = new Discord.RichEmbed() 
          .setAuthor(message.author.username, message.author.displayAvatarURL)
          .setTitle('**50/50 Challenge**')
          .setURL('https://reddit.com/r/FiftyFifty')
          .setColor('#FF5700')
          .setDescription(API)
          .addImage(Fetched)
          .setFooter('From Reddit')
     message.channel.send(mainEmbed) 
} 
