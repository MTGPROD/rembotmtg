const Discord = require('discord.js')
const api = require('arcadia-module');
const infos = require('./infos.json')

exports.run = async (client, message, args, ops) => {
    let target = message.author;
    console.log(target.avatarURL)
    api.generation("bloodhelp", target.avatarURL, 1).then(url => {
            message.channel.send({
            file: {
               attachment: url,
               name: 'bloodhelp.png'
            }
         })
      })

    } 