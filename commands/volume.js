const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
   let fetched = ops.active.get(message.guild.id)
   if(!fetched) return message.channel.send({
     embed: {
       description: "ℹ️ There is no music played in this server, use `r!play <key_word or URL>` to start a music",
     } 
   })
   if(!message.member.voice.channel) return message.channel.send({
     embed: {
       description: "🔊 You are not in a voice channel."
     } 
   }) 
   if(message.member.voice.channel.id != message.guild.me.voice.channel.id) return message.channel.send({
     embed: {
       description: "ℹ️ We are not in the same voice channel."
     } 
   })
  
   if(isNaN(args[0])) return message.channel.send({
     embed: {
       description: "🎚 Use number to set volume `r!volume <number>`"
     } 
   })
  
   if(args[0] > 100) {
     var server = client.guilds.get("489426595166158885")
     
     let member = server.member(message.author) 
     if(!member) return message.channel.send({
       embed: {
         description: `:mute: You can't turn up the volume above 100% because you're not premium.\n\nJoin [Rem Empire](https://discord.gg/KEaGP7Z) for [donate](https://donatebot.io/checkout/489426595166158885?buyer=${message.author.id}) and get some sweet perks !`
       } 
     }) 
     
     if(!member.roles.has("615959493783715860")) return message.channel.send({
       embed: {
         description: `:mute: You can't turn up the volume above 100% because you're not premium.\n\nDonate [here](https://donatebot.io/checkout/489426595166158885?buyer=${message.author.id}) and get some sweet perks !`
       } 
     })  
                      
     fetched.dispatcher.setVolume(args[0]/1000)
   }
   const old = fetched.dispatcher.volume*1000
  
   fetched.dispatcher.setVolume(args[0]/1000) 
   let neww = fetched.dispatcher.volume*1000
   message.channel.send({
     embed: {
       description: `🎚 \`${old}%\` => \`${neww}%\``
     }
   })
}  

exports.help = {
  name: "volume",
  aliases: ["vol", "v"]
} 