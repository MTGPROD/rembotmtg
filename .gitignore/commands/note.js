const Discord = require('discord.js')

exports.run = (client, message, args) => {
     const Watora = new Discord.RichEmbed()

        .setTitle('Bot: Watora#2790, Author: Zenrac#0001')

        .setThumbnail('https://cdn.discordapp.com/avatars/220644154177355777/bd6b28005c26d079486063a4976dfb44.webp?size=1024')

        .addField(':star: 8.13/10', '"Good loli."')

        .setColor('#9f39ad') 

    const Ayana = new Discord.RichEmbed() 
        .setTitle('Bot: Ayana#8911 Author: HcgRandon#0001')
        .setThumbnail('https://cdn.discordapp.com/avatars/185476724627210241/6bfdcdeae0765c7065d3a68b67411b20.png?size=1024') 
        .addField(':star: 9.33/10', '"Complete bot well done but, Ayana PRO has been abused. "') 
        .setColor('#ed3468') 
    
    const Amigo = new Discord.RichEmbed() 

        .setTitle('Bot: Amigo#8120 Author: jac.k12#9409')

        .setThumbnail('') 

        .addField(':star: 6.90/10', '"A promising bot that needs to be improved."')


                              

        .setColor('#ce8c35') 
     
     if(args[0] === 'watora') {
          message.delete()
          message.channel.send(Watora)
     } 
     
     if(args[0] === 'ayana') {
          message.delete()
          message.channel.send(Ayana)
     } 
     
     if(args[0] === 'amigo') {

          message.delete()

          message.channel.send(Amigo) 
                              

     } 
     
     

}
