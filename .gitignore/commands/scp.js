const Discord = require('discord.js')

exports.run = (client, message, args) => {
if(!args[0]) return message.channel.send('Usage: r!scp <001-4999>')
if(args[0] === '001') {
const e001 = new Discord.RichEmbed()
.setDescription('En attente de classification [Bloqué]')
} 
}
