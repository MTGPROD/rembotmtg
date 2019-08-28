const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  var amount = 0
  message.delete()
  var argTo = args[0]
  const member = message.mentions.members.first() || message.guild.members.get(argTo)
  /*if(member) {
    if(!args[1]) return message.channel.send(":x: Your argument is not a number\n```\nUsage: r!purge [@member] | <id> <amount>\nExample: r!purge @MTG 50\n\nDelete a lot of messages.```")
    argTo = args[1]
  }*/
  if(!isNaN(argTo)) {
    amount = argTo
  } else {
    return message.channel.send(":x: Your argument is not a number\n```\nUsage: r!purge [@member] | <id> <amount>\nExample: r!purge @MTG 50\n\nDelete a lot of messages.```")
  }

  
 /* message.channel.bulkdelete(argTo).then(c => {
    c.send(`Purged ${argTo-1} message(s)`).then(m => {
      setTimeout(() => {
        m.delete()
      }, 4000) 
    })
  }) */
 
  
   message.channel.messages.fetch({
 limit: argTo,
}).then((messages) => {
 if (member) {
 const filterBy = member ? member.id : client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
   message.channel.send({
     embed: {
       description: `Purged **${argTo}** messages.`,
     }
   }).then(msg => {
     setTimeout(() => {msg.delete()}, 4000)
   })
});
}

exports.help = {
  name: "purge",
  aliases: ["deleteMessages", "tg"]
}