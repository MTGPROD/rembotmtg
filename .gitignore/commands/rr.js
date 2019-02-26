const Discord = require('discord.js')

exports.run = (client, args, message, ops) => {
    const COLORS = [
        '#FFEF00', 
        '#FFEF00', 
        '#FF9A00', 
        '#FF5500', 
        '#FF9A00', 
        '#D40C00', 
        '#7F4FC9' 
    ] 
    

 
    let fetched = COLORS[Math.floor(Math.random() * COLORS.length)];
    






 setInterval(function() {
     member.guild.roles.find("name", "Rainbow").edit({ color: fetched})
 }, 1000) 

} 
