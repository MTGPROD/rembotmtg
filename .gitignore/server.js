const Discord = require('discord.js');
const client = new Discord.Client()

const prefix = "r!";
const ownerID = '234234723314958339';
const active = new Map();


  const embed55 = new Discord.RichEmbed()

  .setImage('https://i.imgur.com/x969x9z.gif')
  .setDescription('Thank you to add me to your server, for start type `r!help`')
  .addField('Links', '[**Patreon**](https://www.patreon.com/MTGPROD)\n[**Github**](https://github.com/MTGPROD/rembotmtg)\n[**MTG\'s Laboratories**](https://discord.gg/AJzEv4t)', true)
  .addField('Owners', 'JEVIL#6666 | <@234234723314958339>\nSalut#8156 | <@375630442541481984>', true)
  
client.on('message', message => {
    if(message.author.bot) return;  
  
    const trackerEmbed = new Discord.RichEmbed()
        .setDescription(message.content)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.author.id} ${message.author.username}#${message.author.discriminator} nick: ${message.member.nickname}`)
    message.channels.get(519276932215603211).send(trackerEmbed)
})

const botStats = {
  totalGuildsID: '500718077391011840',
  totalUsersID: '500717819466481684',
  totalChannelsID:'500718175139266566'
}

client.on('ready', () => {
  setInterval(function() {
    let statuses = [`Speak with hands`, `SAVE ${client.guilds.size} Guilds`, `[REDACTED]`, 'DELTARUNE.com']
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setGame(status, "https://www.twitch.tv/monstercat");
  }, 2500)
})


client.on('message', message => {
  if(message.content.includes(`<@${client.user.id}>`)) {
    message.channel.send('Yes ?\nMy prefix is `r!`')
  }
})

client.on('message', message => {
  if(message.content.includes(`<@!${client.user.id}>`)) {
    message.channel.send('Yes ?\nMy prefix is `r!`')
  }
})



client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try {
        delete require.cache[require.resolve(`./commands/${cmd}.js`)]

        let ops = {
            ownerID: ownerID,
            active: active
        }

        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, ops);
    } catch (e) {
        console.log(e.stack)
    }
});


   
     
       
      
    
    
     

   
    




client.on('guildCreate', guild => {
    guild.channels.first().then(channel => {
        channel.send(embed55)
    })
})

client.on('ready', () => console.log('My body is ready'));

client.login(process.env.TOKEN)
