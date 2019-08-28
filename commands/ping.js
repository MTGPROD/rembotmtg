const Discord = require('discord.js')

exports.run = (client, message, args) => {
   const ping = new Discord.MessageEmbed()
     .setTitle("Ping :ping_pong:")
     .setDescription(`[\`${Math.round(client.ws.ping)}ms\`](https://google.com)`)
   message.channel.send(ping)

/*const embed = new Discord.RichEmbed() 
.setTitle("Bot: Wolf Management#9627 Author: [WSD]One K.#5237") 
.setThumbnail("https://cdn.discordapp.com/avatars/505428551722336257/82464b97205d2b18a9551475e890f667.png?size=1024")
.setColor('BLACK')
.addField(":star: 7.17/10", '"Good bot in general, but it not really friendly user."')  

message.channel.send(embed)*/
} 

exports.help = {
  name: "ping",
  aliases: []
} 