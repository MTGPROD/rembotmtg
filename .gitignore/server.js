const Discord = require('discord.js');
const client = new Discord.Client()

const prefix = "r!";
const ownerID = '234234723314958339';
const active = new Map();

const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBAPI, client);

client.on('ready', () => {
  setInterval(() => {
      dbl.postStats(client.guilds.size);
  }, 1800000);
});

dbl.client.on('vote', vote => {
  client.channels.get('510821298486640670').send(`User with ID ${vote.user} thank you for your upvote !`);
});

const serverStats = {
  guildID: '489426595166158885',
  totalUsersID: '500691885816545290',
  memberCountID: '500691902186782750',
  botCountID: '500691956851015690',
}

const botStats = {
  totalGuildsID: '500718077391011840',
  totalUsersID: '500717819466481684',
  totalChannelsID:'500718175139266566'
}

client.on('ready', () => {
  setInterval(function() {
    let statuses = [`r!help | with ${client.guilds.size} guilds`, `SAVE ${client.guilds.size} guilds`, `Vote for me !!`, 'v2.5.3b']
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setGame(status, "https://www.twitch.tv/monstercat");
  }, 5000)
})


/*client.on('ready', () => {
    client.user.setGame('Updating to => 2.5.3')
    setInterval(function() {
      client.user.setStatus('online')
    }, 2000)
  
   setInterval(function() {
      client.user.setStatus('idle')
    }, 2500)
  
  setInterval(function() {
      client.user.setStatus('dnd')
    }, 3000)
})*/

client.on('message', message => {
  if(message.content === '<@488734399509168148>') {
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

client.on('message', message => {
    const hello = new Discord.RichEmbed()
     .setDescription('Thanks to add me to your server')
})

client.on('guildCreate', guild => {
  let hi = guild.channels.first()
  hi.send(`Hello i am rem thank you to add me to your server !\n for start, type \`r!help\` :smile:`);
  hi.send(`If you want to give me your opinion, a suggestion, a bug. You can use the commands below:\n\`r!feedback | r!suggestion | r!report\``)
})

client.on('ready', () => console.log('My body is ready'));

/*client.on('guildMemberAdd', member => {
  if(member.guild.id !== serverStats.guildID) return;
  client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`)
})

client.on('guildMemberRemove', member => {
  if(member.guild.id !== serverStats.guildID) return;
  client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`)
})

client.on('guildCreate', guild => {
  client.channels.get(botStats.totalGuildsID).setName(`Total Guilds : ${client.guilds.size}`);
  client.channels.get(botStats.totalUsersID).setName(`Total Users : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`);
  client.channels.get(botStats.totalChannelsID).setName(`Total Channels : ${client.channels.size}`);
})

client.on('guildDelete', guild => {
  client.channels.get(botStats.totalGuildsID).setName(`Total Guilds : ${client.guilds.size}`);
  client.channels.get(botStats.totalUsersID).setName(`Total Users : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`);
  client.channels.get(botStats.totalChannelsID).setName(`Total Channels : ${client.channels.size}`);
})

client.on('message', message => {
  if(message.content === 'r!docu avatar') {
    const avatar = new Discord.RichEmbed()
        .setAuthor('Help for [r!avatar]')
        .setImage('https://cdn.discordapp.com/attachments/493102411603247105/508371158958211096/unknown.png')
        .setDescription('To display your avatar type `r!avatar`\nTo view a member avatar type `r!avatar @user`\nYou have the avatar link to download it if you want\nEX: [Link](https://cdn.discordapp.com/avatars/378879176515780619/81a52be119f615d2653c1c403b19096d.png?size=2048)')
  
    message.channel.send({embed: avatar});
  }

  if(message.content === 'r!docu poll') {
    const avatar = new Discord.RichEmbed()
        .setAuthor('Help for [r!poll]')
        .setImage('https://cdn.discordapp.com/attachments/493102411603247105/508371158958211096/unknown.png')
        .setDescription('To display your avatar type `r!avatar`\nTo view a member avatar type `r!avatar @user`\nYou have the avatar link to download it if you want\nEX: [Link](https://cdn.discordapp.com/avatars/378879176515780619/81a52be119f615d2653c1c403b19096d.png?size=2048)')
  
    message.channel.send({embed: avatar});
  }*/
})

client.login(process.env.TOKEN)
