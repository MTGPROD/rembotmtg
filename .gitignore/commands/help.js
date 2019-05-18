const Discord = require('discord.js');
const infos = require('./infos.json');
const help = require('./help.json')
const cmds = require('./commands.json');

exports.run = (client, message, args, ops) => {
    const avatar = new Discord.RichEmbed()
    .setTitle("Help for [Avatar]")
    .setDescription(`Usage: r!avatar @user\nExample: r!avatar <@${client.user.avatarURL}>\n\nRem will display you the avatar that matches, either yours or the mentioned member`)
    
    const r8ball = new Discord.RichEmbed()
    .setTitle("Help for [8ball]")
    .setDescription(`${help.cmds_help_8ball}`)

    const animes = new Discord.RichEmbed()
    .setTitle("Help for [animes]")
    .setDescription(`${help.cmds_help_animes}`)

    const ascii = new Discord.RichEmbed()
    .setTitle("Help for [ascii]")
    .setDescription(`${help.cmds_help_ascii}`)

    const ban = new Discord.RichEmbed()
    .setTitle("Help for [ban]")
    .setDescription(`${help.cmds_help_ban}`)

    const botstats = new Discord.RichEmbed()
    .setTitle("Help for [botstats]")
    .setDescription(`${help.cmds_help_botstats}`)

    const bugreport = new Discord.RichEmbed()
    .setTitle("Help for [bugreport]")
    .setDescription(`${help.cmds_help_bugreport}`)

    const calc = new Discord.RichEmbed()
    .setTitle("Help for [calc]")
    .setDescription(`${help.cmds_help_calc}`)

    const cat = new Discord.RichEmbed()
    .setTitle("Help for [cat]")
    .setDescription(`${help.cmds_help_cat}`)

    const color = new Discord.RichEmbed()
    .setTitle("Help for [color]")
    .setDescription(`${help.cmds_help_color}`)

    const colors = new Discord.RichEmbed()
    .setTitle("Help for [colors]")
    .setDescription(`${help.cmds_help_colors}`)

    const b64decode = new Discord.RichEmbed()
    .setTitle("Help for [b64decode]")
    .setDescription(`${help.cmds_help_b64decode}`)

    const b64encode = new Discord.RichEmbed()
    .setTitle("Help for [b64encode]")
    .setDescription(`${help.cmds_help_b64encode}`)

    const csgo = new Discord.RichEmbed()
    .setTitle("Help for [csgo]")
    .setDescription(`${help.cmds_help_csgo}`)

    const dashboard = new Discord.RichEmbed()
    .setTitle("Help for [dashboard]")
    .setDescription(`${help.cmds_help_b64decode}`)

    const feedback = new Discord.RichEmbed()
    .setTitle("Help for [feedback]")
    .setDescription(`${help.cmds_help_feedback}`)

    const findusers = new Discord.RichEmbed()
    .setTitle("Help for [findusers]")
    .setDescription(`${help.cmds_help_findusers}`)

    const fortnite = new Discord.RichEmbed()
    .setTitle("Help for [fortnite]")
    .setDescription(`${help.cmds_help_fortnite}`)

    const google = new Discord.RichEmbed()
    .setTitle("Help for [google]")
    .setDescription(`${help.cmds_help_google}`)

    const guildname = new Discord.RichEmbed()
    .setTitle("Help for [guildname]")
    .setDescription(`${help.cmds_help_guildname}`)

    const hug = new Discord.RichEmbed()
    .setTitle("Help for [hug]")
    .setDescription(`${help.cmds_help_hug}`)

    const inv = new Discord.RichEmbed()
    .setTitle("Help for [inv]")
    .setDescription(`Create an instant invite.`)

    const invite = new Discord.RichEmbed()
    .setTitle("Help for [invite]")
    .setDescription(`${help.cmds_help_invite}`)

    const kiss = new Discord.RichEmbed()
    .setTitle("Help for [kiss]")
    .setDescription(`${help.cmds_help_invite}`)

    const leave = new Discord.RichEmbed()
    .setTitle("Help for [leave]")
    .setDescription(`${help.cmds_help_invite}.`)

    const me = new Discord.RichEmbed()
    .setTitle("Help for [me]")
    .setDescription(`${help.cmds_help_invite}`)

    const memes = new Discord.RichEmbed()
    .setTitle("Help for [memes]")
    .setDescription(`${help.cmds_help_invite}`)

    const mute = new Discord.RichEmbed()
    .setTitle("Help for [mute]")
    .setDescription(`${help.cmds_help_mute}`)

    const neohelp = new Discord.RichEmbed()
    .setTitle("Help for [neohelp]")
    .setDescription(`${help.cmds_help_neohelp}`)

    const newchannel = new Discord.RichEmbed()
    .setTitle("Help for [newchannel]")
    .setDescription(`${help.cmds_help_newchannel}`)

    const newemoji = new Discord.RichEmbed()
    .setTitle("Help for [newemoji]")
    .setDescription(`${help.cmds_help_newemoji}`)

    const newrole = new Discord.RichEmbed()
    .setTitle("Help for [newrole]")
    .setDescription(`${help.cmds_help_newrole}`)

    const nick = new Discord.RichEmbed()
    .setTitle("Help for [nick]")
    .setDescription(`${help.cmds_help_nick}`)

    const pause = new Discord.RichEmbed()
    .setTitle("Help for [pause]")
    .setDescription(`${help.cmds_help_pause}`)

    const ping = new Discord.RichEmbed()
    .setTitle("Help for [ping]")
    .setDescription(`${help.cmds_help_ping}`)

    const play = new Discord.RichEmbed()
    .setTitle("Help for [play]")
    .setDescription(`${help.cmds_help_play}`)

    const poll = new Discord.RichEmbed()
    .setTitle("Help for [poll]")
    .setDescription(`${help.cmds_help_poll}`)

    const post = new Discord.RichEmbed()
    .setTitle("Help for [post]")
    .setDescription(`${help.cmds_help_post}`)

    const purge = new Discord.RichEmbed()
    .setTitle("Help for [purge]")
    .setDescription(`${help.cmds_help_purge}`)

    const queue = new Discord.RichEmbed()
    .setTitle("Help for [queue]")
    .setDescription(`${help.cmds_help_queue}`)

    const reboot = new Discord.RichEmbed()
    .setTitle("Help for [reboot]")
    .setDescription(`${help.cmds_help_reboot}`)

    const reload = new Discord.RichEmbed()
    .setTitle("Help for [reload]")
    .setDescription(`${help.cmds_help_reload}`)

    const resume = new Discord.RichEmbed()
    .setTitle("Help for [resume]")
    .setDescription(`${help.cmds_help_resume}`)

    const roleinfo = new Discord.RichEmbed()
    .setTitle("Help for [roleinfo]")
    .setDescription(`${help.cmds_help_roleinfo}`)

    const say = new Discord.RichEmbed()
    .setTitle("Help for [say]")
    .setDescription(`${help.cmds_help_say}`)

    const search = new Discord.RichEmbed()
    .setTitle("Help for [search]")
    .setDescription(`${help.cmds_help_search}`)

    const setgame = new Discord.RichEmbed()
    .setTitle("Help for [setgame]")
    .setDescription(`${help.cmds_help_setgame}`)

    const setregion = new Discord.RichEmbed()
    .setTitle("Help for [setregion]")
    .setDescription(`${help.cmds_help_setregion}`)

    const skip = new Discord.RichEmbed()
    .setTitle("Help for [skip]")
    .setDescription(`${help.cmds_help_skip}`)

    const snipe = new Discord.RichEmbed()
    .setTitle("Help for [snipe]")
    .setDescription(`${help.cmds_help_snipe}`)

    const suggestion = new Discord.RichEmbed()
    .setTitle("Help for [suggestion]")
    .setDescription(`${help.cmds_help_suggestion}`)

    const topic = new Discord.RichEmbed()
    .setTitle("Help for [topic]")
    .setDescription(`${help.cmds_help_topic}`)

    const unban = new Discord.RichEmbed()
    .setTitle("Help for [unban]")
    .setDescription(`${help.cmds_help_unban}`)

    const unmute = new Discord.RichEmbed()
    .setTitle("Help for [unmute]")
    .setDescription(`${help.cmds_help_unmute}`)

    const urban = new Discord.RichEmbed()
    .setTitle("Help for [urban]")
    .setDescription(`${help.cmds_help_urban}`)

    const voicekick = new Discord.RichEmbed()
    .setTitle("Help for [voicekick]")
    .setDescription(`${help.cmds_help_voicekick}`)

    const volume = new Discord.RichEmbed()
    .setTitle("Help for [volume]")
    .setDescription(`${help.cmds_help_volume}`)

    const presidentext = new Discord.RichEmbed()
    .setTitle("Help for [presidentext]")
    .setDescription(`${help.cmds_help_presidentext}`)

    if(args[0] === 'avatar') return message.channel.send({embed: avatar})
    if(args[0] === '8ball') return message.channel.send({embed: r8ball})
    if(args[0] === 'animes') return message.channel.send({embed: animes})
    if(args[0] === 'ascii') return message.channel.send({embed: ascii})
    if(args[0] === 'b64decode') return message.channel.send({embed: b64decode})
    if(args[0] === 'b64encode') return message.channel.send({embed: b64encode})
    if(args[0] === 'ban') return message.channel.send({embed: ban})
    if(args[0] === 'botstats') return message.channel.send({embed: botstats})
    if(args[0] === 'bugreport') return message.channel.send({embed: bugreport})
    if(args[0] === 'calc') return message.channel.send({embed: calc})
    if(args[0] === 'cat') return message.channel.send({embed: cat})
    if(args[0] === 'color') return message.channel.send({embed: color})
    if(args[0] === 'colors') return message.channel.send({embed: colors})
    if(args[0] === 'csgo') return message.channel.send({embed: csgo})
    if(args[0] === 'dashboard') return message.channel.send({embed: dashboard})
    if(args[0] === 'feedback') return message.channel.send({embed: feedback})
    if(args[0] === 'findusers') return message.channel.send({embed: findusers})
    if(args[0] === 'fortnite') return message.channel.send({embed: fortnite})
    if(args[0] === 'google') return message.channel.send({embed: google})
    if(args[0] === 'guildname') return message.channel.send({embed: guildname})
    if(args[0] === 'hug') return message.channel.send({embed: hug})
    if(args[0] === 'inv') return message.channel.send({embed: inv})
    if(args[0] === 'invite') return message.channel.send({embed: invite})
    if(args[0] === 'kiss') return message.channel.send({embed: kiss})
    if(args[0] === 'leave') return message.channel.send({embed: leave})
    if(args[0] === 'me') return message.channel.send({embed: me})
    if(args[0] === 'memes') return message.channel.send({embed: memes})
    if(args[0] === 'neohelp') return message.channel.send({embed: neohelp})
    if(args[0] === 'newchannel') return message.channel.send({embed: newchannel})
    if(args[0] === 'newemoji') return message.channel.send({embed: newemoji})
    if(args[0] === 'newrole') return message.channel.send({embed: newrole})
    if(args[0] === 'nick') return message.channel.send({embed: nick})
    if(args[0] === 'pause') return message.channel.send({embed: pause})
    if(args[0] === 'ping') return message.channel.send({embed: ping})
    if(args[0] === 'play') return message.channel.send({embed: play})
    if(args[0] === 'poll') return message.channel.send({embed: poll})
    if(args[0] === 'post') return message.channel.send({embed: post})
    if(args[0] === 'purge') return message.channel.send({embed: purge})
    if(args[0] === 'queue') return message.channel.send({embed: queue})
    if(args[0] === 'reboot') return message.channel.send({embed: reboot})
    if(args[0] === 'reload') return message.channel.send({embed: reload})
    if(args[0] === 'resume') return message.channel.send({embed: resume})
    if(args[0] === 'roleinfo') return message.channel.send({embed: roleinfo})
    if(args[0] === 'say') return message.channel.send({embed: say})
    if(args[0] === 'search') return message.channel.send({embed: search})
    if(args[0] === 'setgame') return message.channel.send({embed: setgame})
    if(args[0] === 'setregion') return message.channel.send({embed: setregion})
    if(args[0] === 'skip') return message.channel.send({embed: skip})
    if(args[0] === 'snipe') return message.channel.send({embed: snipe})
    if(args[0] === 'suggestion') return message.channel.send({embed: suggestion})
    if(args[0] === 'topic') return message.channel.send({embed: topic})
    if(args[0] === 'unban') return message.channel.send({embed: unban})
    if(args[0] === 'unmute') return message.channel.send({embed: unmute})
    if(args[0] === 'urban') return message.channel.send({embed: urban})
    if(args[0] === 'voicekick') return message.channel.send({embed: voicekick})
    if(args[0] === 'volume') return message.channel.send({embed: volume})
    if(args[0] === 'vote') return message.channel.send({embed: vote})
    if(args[0] === 'presidentext') return message.channel.send({embed: presidentext})

        const ownerembed = new Discord.RichEmbed()
        .setTitle(`Help requested by **${message.author.username}**`)
        .setURL('https://google.com/')
        .setColor('#329FFE')
        .setThumbnail(message.author.avatarURL)
         .addField('Support Rem', 'You can support Rem [here](https://donatebot.io/checkout/489426595166158885).\nSupport Rem for free here. (don\'t working)')
        .addField('Basics', `${cmds.Basics}`)
        .addField('Fun', `${cmds.Fun}`)
        //.addField('Games', ${cmds.Games})
        .addField('Music', `${cmds.Music}`)
        .addField('Moderation', `${cmds.Moderation}`)
        //.addField('Images Random', ${cmds.RandomImages})
        //.addField('Social', ${cmds.Social})
        .addField('Others', `${cmds.Others}`)
        .addField('Dev cmds', `${cmds.Dev}`)
        .setTimestamp()
        .setFooter(infos.version, client.user.displayAvatarURL)

        const embed = new Discord.RichEmbed()
        .setTitle(`Help requested by **${message.author.username}**`)
        .setURL('https://google.com/')
        .setColor('#329FFE')
        .setThumbnail(message.author.avatarURL)
        .addField('Support Rem', 'You can support Rem [here](https://donatebot.io/checkout/489426595166158885).\nSupport Rem for free here. (don\'t working)')
        .addField('Basics', `${cmds.Basics}`)
        .addField('Fun', `${cmds.Fun}`)
        //.addField('Games', ${cmds.Games} )
        .addField('Music', `${cmds.Music}`)
        //.addField('Images Random', ${cmds.RandomImages})
        //.addField('Social', ${cmds.Social})
        .addField('Moderation',`${cmds.Moderation}`)
        .addField('Others', `${cmds.Others}`)
        .setTimestamp()
        .setFooter(infos.version, client.user.displayAvatarURL)
        
 if(message.author.id === '234234723314958339') {
    message.react('ℹ️') 

        message.channel.send({embed: ownerembed})
    
} else {
    message.react('📨')

        message.channel.send({embed: embed})
   
}


let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!help` a été utilisée !')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``) 
    .setThumbnail(message.author.avatarURL)
  
  client.channels.get('503494406264061963').send({embed: embed2});
}
