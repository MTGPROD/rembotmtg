const Discord = require('discord.js')
const {Canvas} = require('canvas-constructor')  
const superagent = require('superagent') 

exports.run = async (bot, message, args) => {
  var nick = message.member.nickname
  if(nick === null) {nick = 'No nickname'} 
  const icon = await superagent.get(message.author.avatarURL)
  const card = new Canvas(1280, 720)
  .setColor('#FFFFFF')
  .addRect(0,0,1280,720)
  .setColor('#000000')
  .addRect(0,0,253,253)
  .setTextFont('35px Impact')
  .setColor('#7d8187')
  .addRect(0,253,253,500)
  .setColor('#6899e2')
  .addText(`Nickname: ${nick}`,280,45)
  .addText(`Name: ${message.author.username}#${message.author.discriminator}`, 280,80) 
  .addText(`ID: ${message.author.id}`, 280,115)
  .setColor('')
  .addImage(icon.body, 0,0,250,250)
  .toBuffer()
  message.channel.send({files:[{attachment: card, name: `${message.author.username}-profile.png`}]})
} 

exports.help = {name: 'profile', aliases: ['me']} 