const Discord = require('discord.js')

exports.run = (client, message, args) => {
var target = message.mentions.users.first() 

let fetched = responses[Math.floor(Math.random() * 100)];

const mainEmbed = new Discord.RichEmbed() 
     .setTitle(`Loveship ❤️❤️❤️`)
     .setDescription(`**${message.author.username}** ${fetched}% **${target.username}** `)
message.channel.send(mainEmbed) 
} 
