const Discord = require('discord.js')
const canvas = require('canvas-constructor')
const snek = require('snekfetch')

var trans = '<:trans:521420739488776228>'
var p = 0;
var color = 'black'
var colorID = '522195640567070720'
var t = false;
var tt = false;

var cases = [
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
    trans,
]


exports.run = (client, message, args) => {
    const colorUI = new Discord.RichEmbed()
        .setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
    message.channel.send(colorUI).then(msg => {
        msg.react('522183328258981903')
        msg.react('523490434081619968')
        msg.react('522503379247824897')
        msg.react('522502512692035597')
        msg.react('522503110359384065')
        msg.react('522502946114502656')
        msg.react('522502630895910912')
        msg.react('522195640567070720')

        const filter8 = (reaction, user) => reaction.emoji.id === '522183328258981903'
        const collector8 = msg.createReactionCollector(filter8);
        collector8.on('collect', r => {
            color = 'red'
            colorID = '522183328258981903'
            colorUI.setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
            msg.edit(colorUI)
        });

        const filter9 = (reaction, user) => reaction.emoji.id === '523490434081619968'
        const collector9 = msg.createReactionCollector(filter9);
        collector9.on('collect', r => {
            color = 'purple'
            colorID = '523490434081619968'
            colorUI.setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
            msg.edit(colorUI)
        });

        const filter10 = (reaction, user) => reaction.emoji.id === '522503379247824897'
        const collector10 = msg.createReactionCollector(filter10);
        collector10.on('collect', r => {
            color = 'orange'
            colorID = '522503379247824897'
            colorUI.setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
            msg.edit(colorUI)
        });

        const filter7 = (reaction, user) => reaction.emoji.id === '522502512692035597'
        const collector7 = msg.createReactionCollector(filter7);
        collector7.on('collect', r => {
            color = 'yellow'
            colorID = '522502512692035597'
            colorUI.setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
            msg.edit(colorUI)
        });

        const filter11 = (reaction, user) => reaction.emoji.id === '522503110359384065'
        const collector11 = msg.createReactionCollector(filter11);
        collector11.on('collect', r => {
            color = 'orange'
            colorID = '522503110359384065'
            colorUI.setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
            msg.edit(colorUI)
        });

        const filter12 = (reaction, user) => reaction.emoji.id === '522502946114502656'
        const collector12 = msg.createReactionCollector(filter12);
        collector12.on('collect', r => {
            color = 'green'
            colorID = '522502946114502656'
            colorUI.setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
            msg.edit(colorUI)
        });

        const filter13 = (reaction, user) => reaction.emoji.id === '522502630895910912'
        const collector13 = msg.createReactionCollector(filter13);
        collector13.on('collect', r => {
            color = 'blue'
            colorID = '522502630895910912'
            colorUI.setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
            msg.edit(colorUI)
        });

        const filter14 = (reaction, user) => reaction.emoji.id === '522195640567070720'
        const collector14 = msg.createReactionCollector(filter14);
        collector14.on('collect', r => {
            color = 'black'
            colorID = '522195640567070720'
            colorUI.setDescription(`Current color: <:${color}:${colorID}>\n\n<:red:522183328258981903> <:purple:523490434081619968> <:orange:522503379247824897> <:yellow:522502512692035597> <:white:522503110359384065> <:green:522502946114502656> <:blue:522502630895910912> <:black:522195640567070720>`)
            msg.edit(colorUI)
        });
    })

    const UI = new Discord.RichEmbed()
        .setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
    message.channel.send(UI).then(msg => {
        msg.react('◀')
        msg.react('🖌')
        msg.react('523277406132371498')
        msg.react('523279131564179474')
        msg.react('⏹')
        msg.react('▶')

        const filter = (reaction, user) => reaction.emoji.name === '▶'
        const collector = msg.createReactionCollector(filter);
        collector.on('collect', r => {
            p++
            if(cases[p-1] === `<:${color}:${colorID}>`) {
                t = true
           }

           if(cases[p] === `<:${color}:${colorID}>`) {
               tt = true
           }
            cases[p-1] = trans
            cases[p] = '<:select:523204809978019878>'
            if(t === true) {
                cases[p-1] = `<:${color}:${colorID}>`
            } 

            if(tt === true) {
                cases[p] = `<:${color}:${colorID}>`
            } 
            UI
            UI.setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
            msg.edit(UI)
            t = false;
            tt = false;
        });

        const filter2 = (reaction, user) => reaction.emoji.name === '◀'
        const collector2 = msg.createReactionCollector(filter2);
        collector2.on('collect', r => {
            p--
            if(cases[p+1] === `<:${color}:${colorID}>`) {
                 t = true
            }

            if(cases[p] === `<:${color}:${colorID}>`) {
                tt = true
            }
            cases[p+1] = trans
            cases[p] = '<:select:523204809978019878>'
            if(t === true) {
                cases[p+1] = `<:${color}:${colorID}>`
            } 

            if(tt === true) {
                cases[p] = `<:${color}:${colorID}>`
            } 
            UI.setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
            msg.edit(UI)
            tt = false;
            t = false;
        });

        const filter3 = (reaction, user) => reaction.emoji.name === '🖌'
        const collector3 = msg.createReactionCollector(filter3);
        collector3.on('collect', r => {
            cases[p] = `<:${color}:${colorID}>`
            UI.setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
            msg.edit(UI)
        });

        const filter4 = (reaction, user) => reaction.emoji.id === '523277406132371498'
        const collector4 = msg.createReactionCollector(filter4);
        collector4.on('collect', r => {
            cases[p] = trans
            cases[p] = '<:select:523204809978019878>'
            UI.setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
            msg.edit(UI)
        });

        const filter5 = (reaction, user) => reaction.emoji.id === '523279131564179474'
        const collector5 = msg.createReactionCollector(filter5);
        collector5.on('collect', r => {
            for(var g = 1; g < cases.length; g++) {
                cases[g] = `<:${color}:${colorID}>`
              }
            UI.setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
            msg.edit(UI)
        });

        const filter6 = (reaction, user) => reaction.emoji.name === '⏹'
        const collector6 = msg.createReactionCollector(filter6);
        collector6.on('collect', r => {
            for(var g = 1; g < cases.length; g++) {
                cases[g] = trans
              }
            UI.setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
            msg.edit(UI)
        });

        
        const filter16 = (reaction, user) => reaction.emoji.name === '⏹'
        const collector16 = msg.createReactionCollector(filter16);
        collector16.on('collect', r => {
            for(var g = 1; g < cases.length; g++) {
                cases[g] = trans
              }
            UI.setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
            msg.edit(UI)
        });

        
        const filter17 = (reaction, user) => reaction.emoji.name === '⏹'
        const collector17 = msg.createReactionCollector(filter17);
        collector17.on('collect', r => {
            for(var g = 1; g < cases.length; g++) {
                cases[g] = trans
              }
            UI.setDescription(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
            msg.edit(UI)
        });
    })

    const endUI = new Discord.RichEmbed()
        .setDescription('Type `SAVE` for save your pixel Art')
    message.channel.send(endUI).then(msg => {

        const filter15 = m => m.content.includes('SAVE');
        const collector15 = msg.channel.createMessageCollector(filter15);
        collector15.on('collect', m => {
           m.author.createDM().then(chl => {
                chl.send('Soon, it will be a real image. :floppy_disk:')
                chl.send(`${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
           })
           m.channel.send(`:floppy_disk:\n\n${cases[0]} ${cases[1]} ${cases[2]} ${cases[3]} ${cases[4]} ${cases[5]} ${cases[6]} ${cases[7]}\n\n ${cases[8]} ${cases[9]} ${cases[10]} ${cases[11]} ${cases[12]} ${cases[13]} ${cases[14]} ${cases[15]}\n\n ${cases[16]} ${cases[17]} ${cases[18]} ${cases[19]} ${cases[20]} ${cases[21]} ${cases[22]} ${cases[23]}\n\n ${cases[24]} ${cases[25]} ${cases[26]} ${cases[27]} ${cases[28]} ${cases[29]} ${cases[30]} ${cases[31]}\n\n ${cases[32]} ${cases[33]} ${cases[34]} ${cases[35]} ${cases[36]} ${cases[37]} ${cases[38]} ${cases[39]}\n\n ${cases[40]} ${cases[41]} ${cases[42]} ${cases[43]} ${cases[44]} ${cases[45]} ${cases[46]} ${cases[47]}\n\n ${cases[48]} ${cases[49]} ${cases[50]} ${cases[51]} ${cases[52]} ${cases[53]} ${cases[54]} ${cases[55]}\n\n ${cases[56]} ${cases[57]} ${cases[58]} ${cases[59]} ${cases[60]} ${cases[61]} ${cases[62]} ${cases[63]}`)
        });

    })
}
//🛑 💾 ⏪ ⏩
