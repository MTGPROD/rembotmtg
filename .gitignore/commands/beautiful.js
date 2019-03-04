const ARCAPI = require("arcadia.js-dev");
const Discord = require('discord.js')

const arcapi = new ARCAPI("095b8a5e1e02d6dafe3ca10f2b270138c391fa476f6c643b055445ad6d4a7828"); //Replace xxx to your arcadia's token

exports.run = (message, client, args, ops) => {















let endpoint = "beautiful"; //Name of an endpoint

let parameter = "url"; //First parameter of the endpoint (URL/TEXT)

let url = message.author.avatarURL //URL of the image

arcapi.getImage(endpoint, parameter, url).then(buffer => {

   message.channel.send({
      files: [{
    attachment: buffer,
    name: `${target.username}-beautiful`
  }]
})
       

           
       
   

});
}
   

    

