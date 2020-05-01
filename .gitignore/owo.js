const Discord = require('discord.js')

exports.run = (bot, message, args) => {
   var string = args.join(' ') 
   var etape1 = string.replace(/n/gi, 'ny')
   var etape2 = etape1.replace(/b/gi, 'bw')
   var etape3 = etape2.replace(/l/gi, 'w')
   var etape4 = etape3.replace(/r/gi, 'w')
   var etape5 = etape4.replace(/ll/gi, 'ww')
   message.channel.send(etape5) 
}  

exports.help = {
   name: 'owo',
   aliases: [] 
} 