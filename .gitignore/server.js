const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "r!";
const ownerID = '234234723314958339';
const active = new Map();
const color = '#2C9DDE';

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
  let statuses = ['https://discord.gg/2qJjJcs | For support', `My prefix is ${prefix}`, 'Rem > Emilia', `r!help | serving ${client.users.size} users`, 'Version 2.0']
  setInterval(function() {
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setPresence({ game: { name: status}, status: 'online'});
  }, 10000)
})

const db = require('quick.db')


client.on('message', async message => {

    if(message.author.bot) return;
    if(message.channel.type !== 'text') {
      let active = await db.fetch(`Support_${message.author.id}`);
      let guild = client.guilds.get('guildID');
      let channel, found = true;
      try {
        if(active) client.channels.get(active.channelID).guild;
      } catch (e) {
        found = false;
      }
      if(!active || !found) {
        active = {};
        channel = await guild.channels.create(`${message.author.username}-${message.author.discriminator}`, {
            parent: 'categoryID',
            topic: `?complete to close the ticket | Support for ${message.author.tag} | ID: ${message.author.id}`
        });
        let author = message.author;

        const newChannel = new Discord.RichEmbed()
            .setColor(color)
            .setAuthor(author.tag, author.displayAvatarURL())
            .setFooter('Support Ticket Created')
            .addField('User', author)
            .addField('ID', author.id)

        await channel.send(newChannel)

        const newTicket = new Discord.RichEmbed()
            .setColor(color)
            .setAuthor(`Hello, ${author.tag}`, author.displayAvatarURL)
            .setFooter('Support Ticket Created')

        await author.send(newTicket);

        active.channelID = channel.id;
        active.targetID = author.id;
      }

      channel = client.channels.get(active.channelID);

      const dw = new Discord.RichEmbed()
          .setColor(color)
          .setAuthor(`Thank you, ${message.author.tag}`, message.author.displayAvatarURL())
          .setFooter(`Your message has been sent -- A staff member will be in contact soon`)

      await message.author.send(dm);

      const embed = new Discord.RichEmbed()
          .setColor(color)
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setDescription(message.content)
          .setFooter(`Message Recieved -- ${message.author.tag}`)

      await channel.send(embed);

      db.set(`support_${message.author.id}`, active);
      db.set(`supportChannel_${channel.id}`, message.author.id);
      return;
    }

    let support = await db.fetch(`supportChannel_${message.channel.id}`);

    if(support) {
      support = await db.fetch(`support_${support}`);
      let supportUser = client.users.get(support.targetID);
      if(!supportUser) return message.channel.delete();
      if(message.content.toLowerCase() === '?complete') {
          const complete = new Discord.RichEmbed()
              .setColor(color)
              .setAuthor(`Hey, ${supportUser.tag}`, supportUser.displayAvatarURL())
              .setFooter('Ticket Closed -- MTG\'s dev')
              .setDescription('*Your ticket has been marked as **complete**. If you wish to reopen this, or create a new one, please send a message to the bot.')

          supportUser.send(complete);

          message.channel.delete();

          db.delete(`Support_${support.targetID}`);
      }

      const embed2 = new Discord.RichEmbed()
          .setColor(color)
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setFooter(`Message Recived -- MTG's dev`)
          .setDescription(message.content)

      client.users.get(support.targetID).send(embed)

      message.delete({timeout: 1000});

      embed2.setFooter(`Message Sent -- ${supportUser.tag}`).setDescription(message.content);

      return message.channel.send(embed);
    }



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



client.on('ready', () => console.log('My body is ready'));

client.on('guildMemberAdd', member => {
  if(member.guild.id !== serverStats.guildID) return;
  client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`)
})

client.on('guildMemberAdd', member => {
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
