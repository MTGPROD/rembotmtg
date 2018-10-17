const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => { 
    if(message.author.id !== "234234723314958339") return message.channel.send("You cannot use this command because, you are not a developer.")

    
  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => client.destroy())
               .then(message => client.destroy())
              .then(() => client.login(process.env.TOKEN));
           message.channel.send("``I successfully rebooted !``")
       }
    }
