const Discord = require('discord.js')
const Enmap = require("enmap")
/*const par = require('../databases/guilds.json') 
const status = require('../databases/infos.json')*/ 
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
                } catch (err) {
                    if (err) return undefined;
                }
            }
        });
    }
}