const fs = require('fs')
const Discord = require('discord.js') 
var house = require('../databases/houses.json')
var guild = require('../databases/guilds.json') 
var eco = require('../databases/economy.json') 
exports.run = (bot, message, args) => {
  
  function save() {
 fs.writeFile('./databases/guilds.json', JSON.stringify(guild), err => {
     if(err) return console.log("[DATABASE] Problème de sauvegarde dans le fichier guilds.json "+err) 
  })
  fs.writeFile('./databases/houses.json', JSON.stringify(house), err => {
     if(err) return console.log("[DATABASE] Problème de sauvegarde dans le fichier houses.json "+err)
  })
}
  var floor = '<:wood_floor_empty:562530784179912735>'
  var stone_floor = '<:stone_floor_empty:562536041077145600>'
  var gold_floor = '<:gold_floor_empty:562663550464819237>'
  var diamond_floor = '<:diamond_floor_empty:562681465461276715>'
  var paladium_floor = '<:paladium_floor_empty:562684822351511592>'
  var obsidian_floor = '<:obsidian_floor_empty:562684905767829511>'
  var houseFloor = house[message.author.id].type2
  var plots4x4 = [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor] 
 if(!args[0]) {
  if(!house[message.author.id]) return message.channel.send("You don't have an house, create one with `r!house claim`. \n\n```\n⚠️WARNING⚠️\n\nAny house created is attached to the server (city) on which the order was placed. If you leave or are banned from the attached server you can make a request to change the city to which you are attached. MTG#8211```")
   if(house[message.author.id].size === "4x4") {
  const houseEmbed = new Discord.RichEmbed()
  .setTitle(house[message.author.id].name)
  .setDescription(`${house[message.author.id]['map'][0]}${house[message.author.id]['map'][1]}${house[message.author.id]['map'][2]}${house[message.author.id]['map'][3]}\n${house[message.author.id]['map'][4]}${house[message.author.id]['map'][5]}${house[message.author.id]['map'][6]}${house[message.author.id]['map'][7]}\n${house[message.author.id]['map'][8]}${house[message.author.id]['map'][9]}${house[message.author.id]['map'][10]}${house[message.author.id]['map'][11]}\n${house[message.author.id]['map'][12]}${house[message.author.id]['map'][13]}${house[message.author.id]['map'][14]}${house[message.author.id]['map'][15]}`) 
  .setFooter(`House of ${house[message.author.id].user} in town ${house[message.author.id].town}`)
  message.channel.send(houseEmbed)
   }
 }
  
  if(args[0] === "rename") {
    const oldName = house[message.author.id].name
    var newName = args.join(' ').slice(6)
    var houseNumber = house[message.author.id].slot
    
    house[message.author.id].name = newName
    guild[message.guild.id]['houses'][`house${houseNumber}`].name = newName
    save() 
    
    if(newName.length > 16) return message.channel.send("The name of a house must not exceed 16 characters.") 
    
    const renameEmbed = new Discord.RichEmbed()
    .setTitle('House rename')
    .setDescription(`You have renamed your house: \`${oldName}\` => \`${newName}\``) 
    message.channel.send(renameEmbed)  
  }  
  
  if(args[0] === "upgrade") {
    if(args[1] === "size") {
    if(house[message.author.id].size === "6x7") return message.channel.send("You can't upgrade the size of your house anymore. You have reach the maximum size.")
    if(house[message.author.id].size === "4x4") {
        if(eco[message.author.id].money < 500) return message.channel.send(`You don't have enough money, ${500 - eco[message.author.id].money}${guild[message.guild.id].currency} missing.`)  
        eco[message.author.id].money += -500
        house[message.author.id].map += [[houseFloor, houseFloor, houseFloor, houseFloor]]
        save()
        message.channel.send(`You have spend 500${guild[message.guild.id].currency} for upgrading your house to \`4x5\`.`)
    }
    } 
  }  
  if(args[0] === "claim") {
    if(house[message.author.id]) return message.channel.send("You can only have one house. In a future one you can have several.")
    if(guild[message.guild.id].acceptHouse === false) return message.channel.send("This server does not accept the creation of houses")               
    if(guild[message.guild.id].full === true) return message.channel.send("The server is full, try to create your home in another server, or activate premium to get some extra places.") 
    if(guild[message.guild.id].premium === false) {
       if(guild[message.guild.id]['houses']['house1'].active === false) {
         guild[message.guild.id]['houses']['house1'] = {
            "active": true,
            "name": `${message.author.username}'s house`, 
            "size": "4x4",
            "owner" : message.author.id,
            "type": "wood",
            "id": message.author.id,
            "upgrades": {} 
         }
         house[message.author.id] = {
            "name": `${message.author.username}'s house`,
            "guild": message.guild.id,
            "size": "4x4",
            "type": "wood",
            "type2": floor, 
            "whitelist": {},
            "map": [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
            "town": message.guild.name,
            "user": message.author.username, 
          } 
           save()
           message.channel.send(`Congratulations, you have your house in **${message.guild.name}** ! Use \`r!house\` to display it.`)
         } else if(guild[message.guild.id]['houses']['house2'].active === false) {
            guild[message.guild.id]['houses']['house2'] = {
            "active": true, 
            "name": `${message.author.username}'s house`, 
            "size": "4x4", 
            "owner": message.author.id, 
            "type": "wood",
            "id": message.author.id, 
            "upgrades": {}, 
         }
         house[message.author.id] = {
            "name": `${message.author.username}' s house`, 
            "guild": message.guild.id,
            "size": "4x4",
            "type": "wood",
            "whitelist": {},
            "map": [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor], 
            "town": message.guild.name, 
            "user":message.author.username, 
         } 
           save()
           message.channel.send(`Congratulations, you have your house in **${message.guild.name}** ! Use \`r!house\` to display it.`)
      } else if(guild[message.guild.id]['houses']['house3']) {
         guild[message.guild.id]['houses']['house3'] = {
            "active": true, 
            "name": `${message.author.username}'s house`, 
            "size": "4x4", 
            "owner": message.author.id, 
            "type": "wood",
            "id": message.author.id, 
            "upgrades": {}, 
         }
         house[message.author.id] = {
            "name": `${message.author.username}' s house`, 
            "guild": message.guild.id,
            "size": "4x4",
            "type": "wood",
            "whitelist": {},
            "map": [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor, floor], 
            "town": message.guild.name, 
            "user":message.author.username, 
         } 
        save()
        message.channel.send(`Congratulations, you have your house in **${message.guild.name}** ! Use \`r!house\` to display it.`)
      }
    }  
  }  r 
  
      /*if(args[0] === "upgrade") {
         if(house[message.author.id]['house'].floorType === "wood") {
            house[message.author.id]['house'].floorType = "stone"
            save() 
            message.channel.send("Your house has been upgraded from ***Wood*** to ***Stone***")
    }
}
  /*
     const mainEmbed = new Discord.RichEmbed() 
        .setTitle(`{house.name} (interface only)`) 
        .setDescription(`${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}\n${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}\n${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}\n${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}\n${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}${floor}`)
        .setFooter(`House of {user}, in town {guild}`)
     message.channel.send(mainEmbed)
     */
} 

exports.help = {name: 'house', aliases: ['h', 'casa']} 