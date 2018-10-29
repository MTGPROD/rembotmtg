const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "r!";
const ownerID = '234234723314958339';
const active = new Map();

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

client.on('message', message => {
   if(message.content === 'r!help hentai') {
    message.channel.send(`<@${message.author.id}> !`)
    message.channel.send(`<@${message.author.id}> !!`)
    message.channel.send(`<@${message.author.id}> !!?`)
    message.channel.send(`***<@${message.author.id}> !!!?***`)
}
})

/*client.on('ready', () => {
  setInterval(function() {
    let statuses = [`My prefix is ${prefix}`, `Killing Emilia`, `r!help | serving ${client.guilds.size} guilds`]
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setGame(status, "https://www.twitch.tv/monstercat");
  }, 30000)
})*/

client.on('ready', () => {
client.user.setStatus('Maintenance 23/100%')
})

client.on('message', message => {
  if(message.content === '<@488734399509168148>') {
    message.channel.send('Yes ?\n My prefix is `r!`')
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
  let hi = guild.channels.first()
  hi.send(`Hello i am rem thank you to add me to your server !\n for start, type \`r!help\` :smile:`);
  hi.send(`If you want to give me your opinion, a suggestion, a bug. You can use the commands below:\n\`r!feedback | r!suggestion | r!report\``)
})

client.on('ready', () => console.log('My body is ready'));

client.on('guildMemberAdd', member => {
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

client.login(process.env.TOKEN)
