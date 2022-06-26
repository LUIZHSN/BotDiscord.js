const Discord = require("discord.js")
exports.run = (client, message, args) => {
 if (!client.lockit) client.lockit = [];
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**<:error:776841201298309160> | ${message.author}** Você nao tem permissão para usar este comando!`); message.channel.createOverwrite(message.guild.id, {
 SEND_MESSAGES: null 
 })
 message.channel.send(`**<:concluido:776841207296032770> | ${message.author}** desbloqueei este canal, agora as pessoas podem voltar a conversar!`);
// De unlock só trocar no SEND_MESSAGES: false, para SEND_MESSAGES: null
 };
 exports.help = {
    name: 'lock',
    aliases: ['fechar']
}