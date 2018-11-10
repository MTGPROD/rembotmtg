const Discord = require('discord.js')
const DBL = require("dblapi.js");

exports.run = (client, message, args, ops) => {
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4ODczNDM5OTUwOTE2ODE0OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQxNzkxNjA5fQ.3YVD7DlUL3PF5htkR67TTwKD_3yaUKft-8xq-N8-wGU', client);
dbl.getVotes().then(votes => {
    if(votes.find(vote => vote.id == message.author.id)) message.channel.send("You are voted !!")
}); 

}