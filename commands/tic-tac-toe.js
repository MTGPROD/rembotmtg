const Discord = require('discord.js')

var case1 = " "
var case2 = " " 
var case3 = " " 
var case4 = " "  
var case5 = " " 
var case6 = " " 
var case7 = " "  
var case8 = " " 
var case9 = " " 


exports.run = (client, message, args) => {
  var run = false
  var player1 = {name: message.author.username, id: message.author.id, form: "❌"} 
  var player2 = false
  
  var turn = false
  
  var game = new Discord.MessageEmbed() 
  .setTitle("Tic-tac-toe `v1.0`")
  .setColor('GREEN')
  .setDescription(`\`\`\`\n${case1} | ${case2} | ${case3}\n${case4} | ${case5} | ${case6}\n${case7} | ${case8} | ${case9}\`\`\`\nDebug \`\`\`\n${player1.name}, ${player1.id}, ${player1.form}\n${player2.name}, ${player2.id}, ${player2.form}\`\`\``) 
  .setFooter("Waiting for opponent, he needs to type \"join-ttt\"")
  message.channel.send(game).then(async msg => {
      
      await msg.react('1⃣')
     .then(() => msg.react('2⃣'))
     .then(() => msg.react('3⃣'))  
     .then(() => msg.react('4⃣'))
     .then(() => msg.react('5⃣'))
     .then(() => msg.react('6⃣'))
     .then(() => msg.react('7⃣'))
     .then(() => msg.react('8⃣'))
     .then(() => msg.react('9⃣'))
    
    const filter = m => m.content.includes('join-ttt');
const collector = msg.channel.createMessageCollector(filter, { time: 60000 });
collector.on('collect', m => {
  if(run === true) return message.channel.send("You can't join an full game.").then(msg => {setTimeout(() => {msg.delete()}, 10000)})
  if(m.author.id === player1.id) return message.channel.send("You can't play with yourself.").then(msg => { setTimeout(() => { msg.delete() }) }, 10000)
  var run = true
  m.delete()
  player2 = {name: message.author.username, id: message.author.id, form: "⭕"}  
  player2.discriminator = message.author.discriminator
  game.setFooter(`${player2.name}#${player2.discriminator} has joined, it's your turn.`)
  turn = 0
  msg.edit(game)
})
collector.on('end', collected => {if(run === false) {game.setFooter("Nobody founded to play with you, please retry."); game.setColor('RED'); msg.clearReactions() ;msg.edit(game)}});
    
    const play = (reaction, user) => reaction.emoji.name === '1⃣' && user.id === player1.id || player2.id  
const playCollector = message.createReactionCollector(filter);
playCollector.on('collect', r => {
   r.remove(r.author)
   if(run === false) return message.channel.send("The game didn't started.").then(msg => { setTimeout(() => {msg.delete()}, 10000)})  
   if(turn === 0 && r.author.id === player1.id) {
     turn = 1
     case1 = "❌"
     msg.edit(game)
   } else if(turn === 1 && r.author.id === player2) {
      turn = 0
      case1 = "⭕"
      msg.edit(game)
   } else {
     return message.channel.send("An major error has occurred, please report the bug with `+bugreport legacy <text for explain error> with an image if you want (attached with the command message).`") 
   }  
});

  })
} 

exports.help = {
  name: "tictactoe",
  aliases: ["ttt"]
} 