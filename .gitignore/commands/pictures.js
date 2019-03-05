const Discord = require('discord.js')

exports.run = (client, message, args) => {
     const mainEmbed = new Discord.RichEmbed()
         .setTitle('Images generation help menu.')
         .setDescription('Thanks to the Arcadia API')
         .addField(`Filter`, '`bluely`, `blur`, blurblack``, `blureen`, `blurey`, `blurple`, `convinvert`, `convmatrix`, `convolute`, `cyanly`, `displace`, `distortion`, `ghost`, `glitch`, `grayscale`, `implode`, `invert`, `magik`, `mosaic`, `offset`, `orangblur`, `orangly`, `pixelate`, `posterize`, `purply`, `sepia`, `time`, `yelloblur`') 
                   
         .addField(`Generation`, '`beautiful`, `rainbow`, `discordlogo`, `gay`, `triggered`, `triggeredinvert`, `animeprotest`, `waifu`') 
         .addField('Text', 'Nope')
         .setFooter('Powered by Arcadia API')
     message.channel.send(mainEmbed)
         
} 
