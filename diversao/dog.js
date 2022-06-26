const client = require('nekos.life');
const superagent = require("snekfetch");
const Discord = require('discord.js');
const errors = require('../errors.json');
const neko = new client();

module.exports = {
  name: "Cats",
  category: "NSFW",
  description: "Sends random Cats gif",
  usage: "[command]",
  run: async (client, message, args) => {
    var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
      if (!message.channel) {
        return message.channel.send(errMessage);
      }  
        async function work() {
        let owo = (await neko.sfw.woof());
        const slapEmbed = new Discord.MessageEmbed()
        .setDescription(`**🐶 DOGUINHOS !!**`)
        .setImage(owo.url)
        .setColor("#fcb1c7")
        .setURL(owo.url)
        .setTimestamp()
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format: "png"}))
        message.channel.send(slapEmbed);
}
      work();
}
};
