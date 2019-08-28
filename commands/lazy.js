const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  var master = new Discord.MessageEmbed()
  .setTitle("Super Music Module Version 1")
  .addField("Now playing", "Nothing", true)
  .addField("Queue", "Empty", true)
  .addField("Time Code", "00:00", true)
  .addField("People", "0(/0)")
  .setFooter(`DJ: ${message.author.username}`,message.author.displayAvatarURL)
  message.channel.send(master).then(async msg => {
    await msg.react("🔀")
    await msg.react("⏮")
    await msg.react("⏸")
    await msg.react("▶")
    await msg.react("⏹")
    await msg.react("⏭")
    await msg.react("🔁")
    await msg.react("🔂")
    
    const filter = (reaction, user) => reaction.emoji.name === 'arrow_forward' && user.id === message.author.id
const collector = msg.createReactionCollector(filter);
collector.on('collect', r => {
   
});
collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  })
  
} 

exports.help = {
  name: "lazy", 
  aliases: []
}