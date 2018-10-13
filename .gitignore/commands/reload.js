const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
    if(message.author.id !== ops.ownerID) return message.channel.send('Sorry, only the owner can use this command.');
    try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
      return message.channel.send(`Unable to reload: ${args[0]}`);
    }

    const embed = new Discord.RichEmbed()
        .setTitle('Reload')
        .setDescription(`Successfully reloaded: ${args[0]}`)
        
    message.channel.send({embed: embed});
}
