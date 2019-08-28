const Discord = require('discord.js')  

exports.run = async (client, message, args, ops) => {

    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

      if(message.author.id !== "234234723314958339" && message.author.id !== "414150494391500800") return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
}

exports.help = {
  name: 'eval', 
  aliases: ['e', 'val'] 
} 