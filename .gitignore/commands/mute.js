const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("You need **KICK_MEMBERS** permissions for use this command.")
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Couldn't find user.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send('lease specify a reason for the mute!')
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
      message.reply("Usage: r!mute <user> <reason>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "mod-logs");
  if (!muteChannel) return message.channel.send('**Please create a channel with the name `mod-logs`**')
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "RANDOM",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .setColor('RANDOM')
        modlog.send(muteembed)

        
    let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!mute` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID`, `\`${message.guild.id}\``)
    .addField(`Guild Name`, `\`${message.guild.name}\``)
    .addField(`Channel`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content`, `\`${message.content}\``)
    .addField(`Muted member`, `\`${user.id}\``)
    .addField(`Reason`, `\`${reason}\``)
    .setThumbnail(message.author.avatarURL)


client.channels.get('503494406264061963').send(embed2);
  
}

