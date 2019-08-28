const {token} = require('../settings/credentials.json');
const discord = require('discord.js') 

module.exports = {

    ready : (client, message, args, guild) => {
    
       console.log(`[${client.guilds.size} Guilds] (${client.users.size} Users) {${client.channels.size} channels} Yes my body was ready.`)
        client.login(process.env.TOKEN)
      client.on('ready', () => {
            //bot.user.setGame(`Emergency update V4 (${bot.guilds.size} guilds) | r!help` , "https://www.twitch.tv/MTGPRODUCTION")
            //bot.user.setStatus('idle');
           
            client.user.setPresence({ activity: { name: `${client.guilds.size} guilds | r!help`, type: "WATCHING", }, status: 'idle'})
      })
    
      client.on("guildDelete", async guild => {
  const guildDeleteChannel = client.channels.get();
  const leaveEmbed = new discord.RichEmbed()
    .setTitle("Serveur suprimmé de ma liste")
    .setColor("FF0000")
    .setDescription(guild.name)
    .addField("Propriétaire", guild.owner)
    .addField("Nombres de membres sur ce serveur", guild.memberCount)
    .addField("Id du serveur",guild.id)
  client.channels.get('508326997059960848').send(leaveEmbed)
});

client.on("guildCreate", async guild => {

  const guildCreateChannel = client.channels.get();
  const invite = await guild.channels
    .find(c => c.type !== "category" && c.position === 0)
    .createInvite({ maxAge: 0 });
  const joinEmbed = new discord.RichEmbed()
    .setTitle("New server!")
    .setColor("GREEN")
    .setDescription(guild.name)
    .addField("Owner", guild.owner)
    .addField("Members", guild.memberCount)
    .addField("ID",guild.id)
    .addField("Invite", invite)
  client.channels.get('508326997059960848').send(joinEmbed)
});
      
      client.on('error', console.warn)
}}