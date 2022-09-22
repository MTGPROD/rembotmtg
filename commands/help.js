const Discord = require('discord.js')

exports.run = (client, message, args) => {
  
  const help = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setColor("BLUE") 
  .setDescription("Welcome, Alpha Tester\nLegend: `🔴` = alpha, `🔵` = beta, `⚪` = Stable\nYou have find a bug ? Tell it us on github by [creating a issue](https://github.com/MTGPROD/rembotmtg/issues/new).") 
  .addField("📖 Informations", "[`serverinfo⚪`](https://g.g), [`userinfo⚪`](http://g.g), [`channelinfo⚪`](https://g.g), [`roleinfo⚪`](https://twitter.com/MTGPRODs), [`emojinfo⚪`](https://g.g) [`anime⚪`](https://g.g)")
  .addField("💵 Economy", "[`daily⚪`](https://g.g), [`hourly⚪`](https://h.h), [`deposit⚪`](https://g.g), [`withdraw⚪`](https://g.g), [`box🔴`](https://g.g)")
  .addField("😂 Fun", "[`8ball⚪`](https://t.h), [`cat⚪`](https://g.g) [`dog⚪`](https://g.g), [`meme⚪`](https://g.g)")
  .addField("🎮 Games", "[`csgo🔴`](https://g.g), [`apex🔴`](http://g.g), [`fortnite🔴`](http://g.g), [`osu🔴`](http://g.g), [`brawlhalla🔴`](http://g.g)")
  .addField("🎲 Minigames", "[`tic-tac-toe🔴`](https://t.t), [`mastermind🔴`](https://g.g), [`minesweeper🔴`](https://g.g), [`hangman🔴`](https://g.g)")
  .addField("🛠 Moderation", "[`ban⚪`](https://g.g), [`kick⚪`](https://g.g), [`mute⚪`](https://g.g), [`unmute⚪`](https://g.g), [`purge⚪`](https://g.g), [`warn⚪`](https://g.g), [`warns⚪`](https://g.g)")
  .addField("⚙️ Guild Management", "[`welcomeMessage⚪`](https://g.g), [`prefix⚪`](http://g.g), [`leaveMessage⚪`](https://g.g)")
  .addField("🎶 Music", "[`play⚪`](https://g.g), [`search⚪`](https://g.g)")
  .addField("💠 Useful", "[`embed🔴`](https://g.g)") 
  message.channel.send(help)
}

exports.help = {
  name: "help", 
  aliases: ["aide"]
}