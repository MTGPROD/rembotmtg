const Discord = require('discord.js')
const Enmap = require("enmap")
const fs = require('fs')
var active = new Map()

var ops = {
   active: active 
}
module.exports = {
  

    message: (client, utils, config, discord) => {
      
/*bot.on('guildMemberAdd', member => {
  if(!par[member.guild.id]['autoroles']) return console.log('aucun autorole')
  member.addRoles(par[member.guild.id]['autoroles'])
})*/
      
      
        client.on('message', async message => {
  /*if(status.status === "wework") return message.channel.send("The is in maintenance actually, come later.")  
  if(status.status === "blocked") return message.channel.send("The bot blocked actually, come later.")   
  if(!par[message.guild.id]) {
    par[message.guild.id] = {
      name: message.guild.name,
      region: message.guild.region,
      icon: message.guild.iconURL,
      logsChannel: false,
      welcomeChannel: false,
      fix: 'r!', 
      muteRole: false,
      acceptHouse: true,
      currency: "$", 
      blacklist: {} 
    }
    fs.writeFile('./databases/guilds.json', JSON.stringify(par, null, 4), err => {
        if(err) throw err; 
    }) 
  }*/
  //var pref = par[message.guild.id].fix
  let key = message.guild.id
  client.servers.ensure(key, { welcomeMessage: false, welcomeMessageChannel: false, prefix: "r!", leaveMessage: false, leaveMessageChannel: false })

  const prefixes = ['+', client.servers.getProp(key, "prefix")] 
  let prefix = false;
  for(const thisPrefix of prefixes) {
    if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  }
          
  if(!prefix) return;
            if (message.author.bot) return;

            let args = message.content.slice(prefix.length).trim().split(' ');
            let cmd = args.shift().toLowerCase();
            let command;

            utils.load(discord, client, config, message, args, message.guild);
            if (!message.content.startsWith(prefix)) return;
            if (client.commands.has(cmd)) {
                command = client.commands.get(cmd);
            } else if (client.aliases.has(cmd)) {
                command = client.commands.get(client.aliases.get(cmd));
            }

            if (config.commandNotFound == true) {
                try {
                    command.run(client, message, args, ops);
                } catch (err) {
                    if (err) utils.timed_msg(utils.cmd_fail(`Command \`${cmd}\` is not found!`, `${prefixes}play  <MUSIC/URL>`), 5000);
                }
            } else {
                try {
                    command.run(client, message, args, ops);

                    let embed2 = new Discord.MessageEmbed()
                    .setTitle('Commande `r!anime` a été utilisée !')
                    .addField(`User:`, `\`${message.author.username}\``)
                    .addField(`ID:`, `\`${message.author.id}\``)
                    .setColor('BLUE')
                    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
                    .addField(`Created At:`, `\`${message.author.createdAt}\``)
                    .addField(`GuildID:`, `\`${message.guild.id}\``)
                    .addField(`Guild Name:`, `\`${message.guild.name}\``)
                    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
                    .addField(`Full content:`, `\`${message.content}\``)
                    .addField(`Anime research:`, `\`${args}\``)
                    .setThumbnail(message.author.avatarURL)
                } catch (err) {
                    if (err) return undefined;
                }
            }
        });
    }
}