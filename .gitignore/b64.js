const base64 = require("js-base64").Base64;
const Discord = require('discord.js')
const infos = require('../databases/infos.json')
const help = require('../databases/help.json') 


exports.run = (bot, message, args) => { 
  
const b64Decoded = base64.decode(args.join(' ').slice(6))
const b64Encoded = base64.encode(args.join(' ').slice(6))

    const error = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setTitle('An error occured')
        .setColor('#EC1C1C')
        .setDescription(`No args`)
        .setFooter(infos.version, bot.user.displayAvatarURL)
  if(!args) return message.channel.send(`
\`\`\`
${help.cmds_help_b64}
\`\`\``)
  if(args[0] === "decode") {
    const b64Decoded = base64.decode(args.join(" ").slice(6));
    
    if(!b64Decoded) return message.channel.send(`
\`\`\`
${help.cmds_help_b64decode}
\`\`\``)
    
    message.channel.send(`\`\`\`\n${b64Decoded}\`\`\``);
  } 
if(args[0] === "encode") {
  const b64Encoded = base64.encode(args.join(' ').slice(8))
  if(!b64Encoded) return message.channel.send(`
\`\`\`
${help.cmds_help_b64encode}
\`\`\``)
}  
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!b64` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Full content:`, `\`${message.content}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Input:`, `\`${args.join(' ')}\``)
    .addField(`Output:`, `\`${b64Encoded} or ${b64Decoded}\``) 
    .setThumbnail(message.author.avatarURL)


bot.channels.get('503494406264061963').send({embed: embed2});
    
}

exports.help = {name: "base64", aliases: ['b64']} 