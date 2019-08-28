exports.run = (client, message, args, ops) => {
    if(!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel')
    message.member.voiceChannel.join()
    message.react('✅')
}

exports.help = {name: 'join', aliases: ['j']}