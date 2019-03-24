const ARCAPI = require("arcadia.js-dev");

const Discord = require('discord.js')

const arcapi = new ARCAPI("095b8a5e1e02d6dafe3ca10f2b270138c391fa476f6c643b055445ad6d4a7828"); //Replace xxx to your arcadia's token

exports.run = (client, message, args) => {

var finish = 'https://cdn.discordapp.com/attachments/552283011765501975/552300869685608452/1551749175196644556292.jpg' 

if(!args[0]) {

     finish = message.author.avatarURL

} 

if(args[0]) { 

     if(!args[0].includes('https://')) return message.channel.send('Use a valid URL/LINK') 

        

            

    

} 

let endpoint = "animeprotest"; //Name of an endpoint

let parameter = "url"; //First parameter of the endpoint (URL/TEXT)

let url = finish //URL of the image

arcapi.getImage(endpoint, parameter, url).then(buffer => {

   message.channel.send({

      files: [{

    attachment: buffer,

    name: `${message.author.username}-animeprotest.jpeg`

  }]

})

       

           

       

   

});
 const logsEmbed = new Discord.RichEmbed() 
.setTitle('Commande `r!animesprotest` a été utilisée !')

    .setColor('#36393F')

    .addField(`User:`, `\`${message.author.username}\``)

    .addField(`ID:`, `\`${message.author.id}\``)

    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)

    .addField(`Created At:`, `\`${message.author.createdAt}\``)

    .addField(`GuildID:`, `\`${message.guild.id}\``)

    .addField(`Guild Name:`, `\`${message.guild.name}\``)

    .addField(`Full content:`, `\`${message.content}\``)

    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)

    .setThumbnail(message.author.avatarURL)
    client.channels.get('503494406264061963').send(logsEmbed)
}

   
