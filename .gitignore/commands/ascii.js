const ascii = require('ascii-art');

exports.run = (client, message, args, ops) => {
  ascii.font(args.join(' '), 'Doom', function(rendered) {
  rendered = rendered.trimRight();
  if(rendered.length > 2000) return message.channel.send('Sorry, that message is too long !');
  message.channel.send(rendered, {
    code: 'md'
      });
  });
}
