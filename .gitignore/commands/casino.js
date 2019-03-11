const Discord = require('discord.js')

exports.run = (client, message, args) => {
     let Machine = [':gem:', ':dvd:', ':pound:', ':cd:', ':moneybag:', ':credit_card:', ':gear:']

     let slot1 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot2 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot3 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot4 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot5 = Machine[Math.floor(Math.random() * Machine.length)];
     
var result = 'You lose!' 
var resultx5 = 'You lose!' 
if(slot1 === slot2 && slot2 === slot3) {
     result = 'You have win!' 
} 
if(args[0] === 'x5') {
   
   if(slot1 === slot2 && slot2 === slot3 && slot4 === slot5) {
        resultx5 = 'You win!'
   } 
     
       const secondEmbed = new Discord.RichEmbed() 
           .setTitle('Casino x5') 
           .setDescription(`${slot1} | ${slot2} | ${slot3} | ${slot4} | ${slot5}`) 
           .setFooter(resultx5)
      message.channel.send(secondEmbed)
  } else {
    const mainEmbed = new Discord.RichEmbed() 
        .setTitle('Casino')
        .setDescription(`${slot1} | ${slot2} | ${slot3}`)
        .setFooter(result)
    message.channel.send(mainEmbed)
       
 } 
    
} 
