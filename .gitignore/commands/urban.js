const Discord = module.require("discord.js")
const urban = module.require("urban");
const color = "#329FFE";


exports.run = async (client, message, args) => {
    if(args.length < 1) return message.channel.send("Please enter something !");
    let str = args.join(" ");

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
}
