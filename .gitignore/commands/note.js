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

        .setThumbnail('https://cdn.discordapp.com/avatars/464551154114756609/fdb1af90a6d8b93445356ef1cf1d37f1.png?size=1024') 

        .addField(':star: 6.90/10', '"A promising bot that needs to be improved."')


                              

        .setColor('#ce8c35') 
    
    const Tohsaka = new Discord.RichEmbed() 

        .setTitle('Bot: Rin Tohsaka#9095 Author: ||censored||#8143') 
               

        .setThumbnail('https://cdn.discordapp.com/avatars/524108359624818708/80dfe14030d535238c1d6f5ed3ca96b0.png?size=1024') 

        .addField(':star: 7.25/10', `"Nothing to say, it's a good bot."`)
        .setColor('#c99c4e') 
    
    const memer = new Discord.RichEmbed() 

        .setTitle('Bot: Dank Memer#6539 Author: Melmsie#0001') 

               

        .setThumbnail('https://cdn.discordapp.com/avatars/270904126974590976/c9146cbc884d792c843529fcf1aec4dc.webp?size=1024') 

        .addField(':star: 7.27/10', `"Very good bot for create your memes."`)

        .setColor('#4baa33') 
               
     if(args[0] === 'tohsaka') {

          message.delete()

          message.channel.send(Tohsaka) 
                              
                              
                              

     } 

     





    

     
     if(args[0] === 'watora') {
          message.delete()
          message.channel.send(Watora)
     } 
     
     
     if(args[0] === 'dank memer') {
          message.delete()
          message.channel.send(memer)
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
