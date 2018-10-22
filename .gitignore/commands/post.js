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
    
     let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!post` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID`, `\`${message.guild.id}\``)
        .addField(`Guild Name`, `\`${message.guild.name}\``)
        .addField(`Full content`, `\`${message.content}\``)
        .addField(`PostID/AuthorID`, `\`${entry.id}/${entry.userID}\``)


    client.channels.get('503494406264061963').send(embed2);
}
