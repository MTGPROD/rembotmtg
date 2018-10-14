const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
   if(isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
   if(args[0] > 200) return message.channel.send('**Please supply a number less then 200**')
   message.channel.bulkDelete(args[0])
    .then( messages => message.channel.send(`**Successfully deleted \`${message.size}/${args[0]}\` messages**`).then( msg => msg.delete({ timeout: 10000 })))
        .catch(error => message.channel.send(`**:x: ERROR:** ${error.message}`));
}
