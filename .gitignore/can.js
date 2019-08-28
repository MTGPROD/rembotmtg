const Discord = require('discord.js')
const { Canvas } = require('canvas-constructor')
const superagent = require('superagent')
const fs = require('fs') 
var house = require('../databases/houses.json') 

// function to encode file data to base64 enc
exports.run = async (bot, message, args) => {

if(args[0] === 's') {
const hype = await superagent.get('https://cdn.discordapp.com/attachments/562723454307270666/582905921424982027/562530784179912735.png')
} 
  //for(var i = 0; i < house[message.author.id].size; i++) {
       
//  }  
  const wood_floor = await superagent.get('https://cdn.discordapp.com/attachments/562723454307270666/582905921424982027/562530784179912735.png')
  //const wood_floor_table = await 
  var cases = {
    "case1": {
      value: ""
    } 
  } 
for(var i = 1; i > 54; i++) { 
  if(house[message.author.id]['house'][`c${i}`].value == "wood_floor") {
    
  }  
} 
   const can = new Canvas(296, 200).toBuffer()
 //  if(house[message.author.id]['house']['c1'].value === "wood_floor") {
   can.addImage(wood_floor.body, 0,0,32,32)
 //  }  
    /*.addImage(wood_floor, 0, 0, 32, 32)
    .addImage(cases[1], 33, 0, 32, 32)
    .addImage(cases[2], 66, 0, 32, 32) 
    .addImage(cases[3], 99, 0, 32, 32)
    .addImage(cases[4], 132, 0, 32, 32)
    .addImage(cases[5], 165, 0, 32, 32)
    .addImage(wood_floor.body, 198, 0, 32, 32)
    .addImage(wood_floor.body, 231, 0, 32, 32)
    .addImage(wood_floor.body, 264, 0, 32, 32)
    .addImage(wood_floor.body, 0, 33, 32, 32)
    .addImage(wood_floor.body, 33, 33, 32, 32)
    .addImage(wood_floor.body, 66, 33, 32, 32)
    .addImage(wood_floor.body, 99, 33, 32, 32)
    .addImage(wood_floor.body, 132, 33, 32, 32)
    .addImage(wood_floor.body, 165, 33, 32, 32)
    .addImage(wood_floor.body, 198, 33, 32, 32)
    .addImage(wood_floor.body, 231, 33, 32, 32)
    .addImage(wood_floor.body, 264, 33, 32, 32)
    .addImage(wood_floor.body, 0, 66, 32, 32)
    .addImage(wood_floor.body, 33, 66, 32, 32)
    .addImage(wood_floor.body, 66, 66, 32, 32)
    .addImage(wood_floor.body, 99, 66, 32, 32)
    .addImage(wood_floor.body, 132, 66, 32, 32)
    .addImage(wood_floor.body, 165, 66, 32, 32)
    .addImage(wood_floor.body, 198, 66, 32, 32)
    .addImage(wood_floor.body, 231, 66, 32, 32)
    .addImage(wood_floor.body, 264, 66, 32, 32)
    .addImage(wood_floor.body, 0, 99, 32, 32)
    .addImage(wood_floor.body, 33, 99, 32, 32)
    .addImage(wood_floor.body, 66, 99, 32, 32)
    .addImage(wood_floor.body, 99, 99, 32, 32)
    .addImage(wood_floor.body, 132, 99, 32, 32)
    .addImage(wood_floor.body, 165, 99, 32, 32)
    .addImage(wood_floor.body, 198, 99, 32, 32)
    .addImage(wood_floor.body, 231, 99, 32, 32)
    .addImage(wood_floor.body, 264, 99, 32, 32)
    .addImage(wood_floor.body, 0, 132, 32, 32)
    .addImage(wood_floor.body, 33, 132, 32, 32)
    .addImage(wood_floor.body, 66, 132, 32, 32)
    .addImage(wood_floor.body, 99, 132, 32, 32)
    .addImage(wood_floor.body, 132, 132, 32, 32)
    .addImage(wood_floor.body, 165, 132, 32, 32)
    .addImage(wood_floor.body, 198, 132, 32, 32)
    .addImage(wood_floor.body, 231, 132, 32, 32)
    .addImage(wood_floor.body, 264, 132, 32, 32)
    .addImage(wood_floor.body, 0, 165, 32, 32)
    .addImage(wood_floor.body, 33, 165, 32, 32) 
    .addImage(wood_floor.body, 66, 165, 32, 32)
    .addImage(wood_floor.body, 99, 165, 32, 32) 
    .addImage(wood_floor.body, 132, 165, 32, 32)
    .addImage(wood_floor.body, 165, 165, 32, 32)
    .addImage(wood_floor.body, 198, 165, 32, 32)
    .addImage(wood_floor.body, 231, 165, 32, 32) 
    .addImage(wood_floor.body, 264, 165, 32, 32)*/
   
   
  message.channel.send({files:[{attachment: can, name: 'house.png'}]})

} 

exports.help = {name: 'can', aliases: ['c']} 