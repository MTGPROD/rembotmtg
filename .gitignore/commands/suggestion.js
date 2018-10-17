const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.channels.get('502191191216095242'); 

    if (!suggestmessage) {
        return message.reply("Plase Give Text To Suggestion Channel!")
    }

    let embed = new Discord.RichEmbed()
        .addField("**SUGGESTION**", `${suggestmessage}`)
        .setFooter(`Suggestion By ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your Suggestion is sended.`)
    return;
}
