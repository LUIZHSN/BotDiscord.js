const client = require('nekos.life');
const superagent = require("snekfetch");
const Discord = require('discord.js');
const errors = require('../errors.json');
const neko = new client();

module.exports = {
  name: "avatar",
  category: "SFW",
  description: "Sends random avatar gif",
  usage: "[command]",
  run: async (client, message, args) => {

    var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
      if (!message.channel) {
        return message.channel.send(errMessage);
      }  
    async function work() {
    let owo = (await neko.sfw.avatar());
    const slapEmbed = new Discord.MessageEmbed()
        .setDescription(`**<:nf_zxHehe2:776480824320196648> Icons!**`)
        .setImage(owo.url)
        .setColor("#e7e7e7")
        .setURL(owo.url)
        .setTimestamp()
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
    message.channel.send(slapEmbed);
}
    work();
}
};
