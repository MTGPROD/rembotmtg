const ARCAPI = require("arcadia.js-dev");
const arcapi = new ARCAPI("a91e3faa988edd95a3a36e83575d7eb349be42049408f1bf1be9986d626d9cfd"); //Replace xxx to your arcadia's token
exports.run = (client, message, args, ops) => {
let endpoint = "angry"; //Name of an endpoint
let parameter = "url"; //First parameter of the endpoint (URL/TEXT)
let url = message.author.avatarURL; //URL of the image
 
arcapi.getImage(endpoint, parameter, url).then((buffer) => {
    
        message.channel.send({
  files: [{
    attachment: buffer,
    name: `angry-${message.author.username}.gif`
  }]
})
  .then(console.log)
  .catch(console.error);

});
}
