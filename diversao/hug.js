const client = require('nekos.life');
const superagent = require("snekfetch");
const Discord = require('discord.js');
const errors = require('../errors.json');
const neko = new client();

module.exports = {
  name: "hug",
  category: "SFW",
  description: "Sends random hug gif",
  usage: "[command]",
  run: async (client, message, args) => {

    let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      if(!slapUser) return message.channel.send("Por favor mencione alguem");

    var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
      if (!message.channel) {
        return message.channel.send(errMessage);
      }  
    async function work() {
    let owo = (await neko.sfw.hug());
    const slapEmbed = new Discord.MessageEmbed()
        .setDescription(`**💙  ${message.author}  Abraçou  ${message.mentions.users.first()} !**`)
        .setImage(owo.url)
        .setColor("#4886f8")
        .setURL(owo.url)
        .setTimestamp()
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
    message.channel.send(slapEmbed);
}
    work();
}
};
