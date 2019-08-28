const Discord = require('discord.js')

exports.run = (bot, message, args) => {
const mainEmbed = new Discord.RichEmbed()
     .setTitle(`Help menu - ${message.author.username}#${message.author.discriminator}`)
     .setDescription('Welcome to the big update of Rem the V4\nYou can [vote for me](https://discordbots.org/bot/488734399509168148/vote) on DBL for unlock your box of the new economy system.\nNow you can change the prefix with `r!settings prefix set <prefix>`')
     .addField(`Economy 💵`, '`box`, `daily`')
     .addField("Music 🎵", "`play`, `search`, `pause`, `resume`, `skip`")
     .addField("Fun 🎱", "`8ball`, `ascii`, `b64`, `loveship`, `casino`, `owo`, `say`")
     .addField("Useful ⚙️", "`color`, `dashboard`, `cpu`, `pp`, `members`, `nick`, `feedback`, `report`, `suggestion`, `fortnite`, `csgo`")
     .addField("Moderator 🎩", "`ban`, `kick`, `mute`, `unmute`") 
message.channel.send(mainEmbed)
}

exports.help = {
  name: "help",
  aliases: ['h', 'aide', 'infos']
}