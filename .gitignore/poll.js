const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  let name = "default name"
  let question = "question ❓"
  message.channel.send("Please enter the name of the poll.")
   const filter = m => m.author.id === message.author.id;
// Errors: ['time'] treats ending because of the time limit as an error
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
  .then(collected => {
        name = collected.first(); message.channel.send(`The name of the poll is: **${collected.first()}**`)
  
  message.channel.send("Please enter the question")
  const filter2 = m => m.author.id === message.author.id
  message.channel.awaitMessages(filter2, {max: 1, time: 30000, errors: ['time']})
  .then(collected => {
    question = collected.first(); message.channel.send(`The question of the poll is: **${collected.first()}**`)
    const poll = new Discord.RichEmbed().setColor('GREEN')
    .setTitle(name)
    .setDescription("**"+question+"**") 
    .setFooter(`Created by ${message.author.username}`)
    message.channel.send(poll).then(msg => {
      msg.react('✅')
      msg.react('❌')
    })
     
  }) 
})
} 
exports.help = {name: "poll", aliases: []}
  