const Discord = require('discord.js')

exports.run = (client, message, args) => {
if(!args[0]) return message.channel.send('Usage: r!scp <001-4999>')
if(args[0] === '001-FR') {
const e001 = new Discord.RichEmbed()
.setTitle('SCP-001-FR')
.setDescription(`En attente de classification [Bloqué]\n\n**NOTE GÉNÉRALE 001-Alpha:**\nAfin d'éviter les fuites sur la connaissance de SCP-001, plusieurs faux fichiers SCP-001 ont été créés avec le(s) vrai(s) fichier/fichiers. Tous les dossiers concernant la nature de SCP-001, y compris le(s) leurre/leurres, sont protégés par un agent mémétique destiné à provoquer immédiatement un arrêt cardiaque de tous les membres du personnel non-autorisés tentant d'accéder au(x) fichiers. Révéler la/les vraie(s) nature/natures de SCP-001 pour le grand public est une cause d\'exécution, sauf en vertu de ||████||-||███||-||██████||.`)
message.channel.send(e001) 
} 
}
