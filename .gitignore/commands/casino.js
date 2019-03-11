const Discord = require('discord.js')

exports.run = (client, message, args) => {
     let Machine = [':gem:', ':dvd:', ':pound:', ':cd:', ':moneybag:', ':credit_card:']

     let slot1 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot2 = Machine[Math.floor(Math.random() * Machine.length)];
     let slot3 = Machine[Math.floor(Math.random() * Machine.length)];
var result = 'You lose!' 
if(slot1 === slot2 && slot2 === slot3) {
     result = 'You have win!' 
} 

    const mainEmbed = new Discord.RichEmbed() 
        .setTitle('Casino')
        .setDescription(`${slot1} | ${slot2} | ${slot3}`)
        .setFooter(result)
    message.channel.send(mainEmbed)
       
    
    
} 
