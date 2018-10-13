const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "r!";
const ownerID = '';

client.on('message', message => {
});

client.on('ready', () => console.log('My body is ready'));

client.login(process.env.TOKEN)
