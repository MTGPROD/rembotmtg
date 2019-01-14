const ARCAPI = require("arcadia.js-dev");
const arcapi = new ARCAPI(process.env.ARCATOKEN); //Replace xxx to your arcadia's token
exports.run = (client, message, args, ops) => {
let endpoint = "presidentialalert"; //Name of an endpoint
let parameter = "text"; //First parameter of the endpoint (URL/TEXT)
let text = args[0]; //URL of the image
 
arcapi.getImage(endpoint, parameter, url).then((buffer) => {
    
        message.channel.send({
  files: [{
    attachment: buffer,
    name: `presidential alert-${message.author.username}.gif`
  }]
})
  .then(console.log)
  .catch(console.error);

});
}
