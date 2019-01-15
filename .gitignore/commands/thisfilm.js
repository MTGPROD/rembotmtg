const ARCAPI = require("arcadia.js-dev");
const arcapi = new ARCAPI(process.env.ARCATOKEN); //Replace xxx to your arcadia's token
exports.run = (client, message, args, ops) => {
let endpoint = "thisfilm"; //Name of an endpoint
let parameter = "url"; //First parameter of the endpoint (URL/TEXT)
let url = message.author.avatarURL; //URL of the image
 
arcapi.getImage(endpoint, parameter, url).then((buffer) => {
    
        message.channel.send({
  files: [{
    attachment: buffer,
    name: `thisfilm-${message.author.username}.gif`
  }]
})
  .then(console.log)
  .catch(console.error);

});
}
