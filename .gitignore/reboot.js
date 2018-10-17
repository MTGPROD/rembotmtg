const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "234234723314958339") return message.channel.send("You cannot use this command because, you are not a developer.")

    
  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
              .then(() => bot.login(process.env.TOKEN));
           message.channel.send("``I successfully rebooted !``")
       }
    }
