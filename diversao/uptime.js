const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `<:relogio:780480644211540029> ${days.toFixed()} dias\n<:relogio:780480644211540029> ${hours.toFixed()} horas\n<:relogio:780480644211540029> ${minutes.toFixed()} minutos\n<:relogio:780480644211540029> ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Tempo de atividade`)
    .setThumbnail("https://i.imgur.com/eNNB3Bz.gif")
    .setColor("#eceef0")
    .setDescription(`**Estou acordada há:**\n${uptime}`)

  message.channel.send(embed);
};
exports.help = {
    name: 'uptime',
    aliases: ['up']
}