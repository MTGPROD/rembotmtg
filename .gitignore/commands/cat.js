const snek = require("snekfetch");
const Discord = require('discord.js')
const api = "http://aws.random.cat/meow";
const color = "#329FFE";

exports.run = async (client, message, args) => {
    let msg = await message.channel.send("**Generating...**");

    let file = (await snek.get(api)).body.file;
    if(!file) return message.channel.send("**I broke ! Try again.**");

    await message.channel.send({files: [
        {
            attachment: file,
            name: file.split("/").pop()
        }   
    ]});  

    msg.delete();
}
