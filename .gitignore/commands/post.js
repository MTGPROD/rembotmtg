const api = "https://jsonplaceholder.typicode.com/posts";
const snekfecth = require("snekfetch");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    snekfecth.get(api).then(r => {
        let body = r.body;
        let id = Number(args[0]);
        if(!id) return message.channel.send("Supply an ID!");
        if(isNaN(id)) return message.channel.send("Supply a valid number!");

        let entry = body.find(post => post.id === id);
        if(!entry) return message.channel.send("This entry does not exist!");

        let embed = new Discord.RichEmbed()
            .setAuthor(entry.title)
            .setDescription(entry.body)
            .addField("Author ID", entry.userId)
            .setFooter("Post ID: " + entry.id)

        message.channel.send({embed: embed});
    });
}
