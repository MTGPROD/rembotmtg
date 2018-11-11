const Discord = require('discord.js')

const API = [
    'https://tenor.com/view/sniper-anime-sinon-weapon-gun-gif-8130445',
    'https://pa1.narvii.com/5749/55f5e44dc0c46754e3013c4b8fb0ff90a3b106c4_hq.gif',
    'https://image.myanimelist.net/ui/_3fYL8i6Q-n-155t3dn_4qB8472n_F8yW2ChO2DylET2dzYE-voLjnkc5NDPt9tX',
    'https://pa1.narvii.com/5749/47d2f98b6a6fb565cd444d777cef2b8d77f2e370_hq.gif',
    'http://31.media.tumblr.com/87ffb2cbacf3afc67a16600901de160a/tumblr_n4i38uL9PB1sihyr3o1_500.gif',
    'http://www.hxchector.com/wp-content/uploads/2015/10/sword-art-online-ii-gifs8.gif',
    'http://pa1.narvii.com/5749/6fb5b124510be9a92bd792d3288bedde59247300_hq.gif',
    'https://a.disquscdn.com/uploads/mediaembed/images/2000/3693/original.gif',
]

let fetched = API[Math.floor(Math.random() * API.length)];

exports.run = (client, message, args) => {
    let shootedUser = message.mentions.users.first() || message.guild.members.get(args[0]) 

    const embed = new Discord.RichEmbed()
        .setDescription(`\`${message.author.username}\` sniped \`${shootedUser.username}\``)
        .setImage(fetched)
        .setColor('#36393F')

    message.channel.send(embed);
}