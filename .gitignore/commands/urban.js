const Discord = module.require("discord.js")
const urban = module.require("urban");
const color = "#329FFE";


exports.run = async (client, message, args) => {
    
    if(message.channel.nsfw === false) {
        message.channel.send('Sorry man this command is "nsfw" lmao') 
    } 
    
    if(args.length < 1) return message.channel.send("Please enter something !");
    let str = args.join(` `);

    urban(str).first(json => {
        if(!json) return message.channel.send("No results founds !")
        console.log(json);

    let embed = new Discord.RichEmbed()
        .setTitle(json.word)
        .setDescription(json.definition || "None")
        .addField("👍", json.thumbs_up, true)
        .addField("👎", json.thumbs_down, true)
        .setColor(color)
        .setFooter(`Written by ${json.author}`);

        message.channel.send({embed: embed});

    });
    
     let embed2 = new Discord.RichEmbed()
        .setTitle('Commande `r!urban` a été utilisée !')
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID`, `\`${message.guild.id}\``)
        .addField(`Guild Name`, `\`${message.guild.name}\``)
        .addField(`Full content`, `\`${message.content}\``)


    client.channels.get('503494406264061963').send(embed2);
}
