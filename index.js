const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const ready = require('./handlers/ready');
const message = require('./handlers/message');
const config = require('./settings/config.json');
const {YouTubeAPIKey} = require('./settings/credentials.json');
const utils = require('./global/utils');
const client = new Discord.Client();
const DBL = require("dblapi.js")
const randomPuppy = require("random-puppy")  
const fs = require('fs')
const Enmap = require('enmap')
const music = require('./global/functions')(client, utils, ytdl, config);
require('./global/functions')(client, utils, ytdl, config);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://rem-b.glitch.me/`);
}, 250000);

var cooldown = new Set()

app.get("/cat", (req, res) => {
  randomPuppy("cat").then(url => { 
  res.send({ url: url })
  }) 
})

client.shareholders = new Enmap({ name: "shareholders" })
client.servers = new Enmap({ name: "servers" })
client.help = new Enmap({ name: "help" })
client.box = new Enmap({ name: "box" })
client.autoroles = new Enmap({ name: "autoroles" }) 
client.groups = new Enmap({ name: "factions"}) 
client.items = new Enmap({ name: "items" }) 
client.queue = new Enmap({ name: "queue"}) 

client.on('message', message => {
  if(!message.channel.id === "609365714930892810") return;
})

client.on("ready", () => {
  console.log("This bot is deprecated")
})

client.on("guildMemberAdd", member => {
  let key = member.guild.id
  if(!client.autoroles.has(key)) return;
  
  for(let i = 0; i < client.autoroles.get(key).length; i++) {
    let array = client.autoroles.get(key)
    
    member.roles.add(array[i])
  }   
})

client.on("guildMemberAdd", member => {
  const key = member.guild.id
  
  if(!client.servers.has(key)) return; 
  if(!client.servers.hasProp(key, "welcomeMessage")) return;
  if(!client.servers.hasProp(key, "welcomeMessageChannel")) return;
  
  const channelID = client.servers.getProp(key, "welcomeMessageChannel")
  const welcomeMessage = client.servers.getProp(key, "welcomeMessage") 
  
  var step1 = welcomeMessage.replace("{user}", `<@${member.id}>`)
  var step2 = step1.replace("{user.name}", member.user.username)
  var step3 = step2.replace("{user.tag}", member.user.tag)
  var step4 = step3.replace("{user.discriminator}", member.user.discriminator)
  var step5 = step4.replace("{guild}", member.guild.name)
  
  member.guild.channels.get(channelID).send(step5)
  
})

client.on("guildMemberRemove", member => {
  const key = member.guild.id
  
  
  if(!client.servers.has(key)) return; 
  if(!client.servers.hasProp(key, "leaveMessage")) return
  if(!client.servers.hasProp(key, "leaveMessageChannel")) return
  
  const channelID = client.servers.getProp(key, "leaveMessageChannel")
  const leaveMessage = client.servers.getProp(key, "leaveMessage")
  
  var step1 = leaveMessage.replace("{user}", `<@${member.id}>`)
  var step2 = step1.replace("{user.name}", member.user.username)
  var step3 = step2.replace("{user.tag}", member.user.tag)
  var step4 = step3.replace("{user.discriminator}", member.user.discriminator)
  var step5 = step4.replace("{guild}", member.guild.name)
  
  member.guild.channels.get(channelID).send(step5)
})

global.Enmap = require("enmap");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.youtube = new YouTube(YouTubeAPIKey); 
client.queue = new Map() 
client.votes = new Map(); 
ready.ready(client);
message.message(client, utils, config, Discord)

/*dbl.on('posted', () => {
     bot.channels.get('508326997059960848').send(':outbox_tray: [DBL] Server count posted') 
}) 

dbl.on('vote', vote => {
  bot.channels.get('508326997059960848').send(`:inbox_tray: [DBL] User with ID ${vote.user} just voted!`);
});*/