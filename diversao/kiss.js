const client = require('nekos.life');
const superagent = require("snekfetch");
const Discord = require('discord.js');
const errors = require('../errors.json');
const neko = new client();

module.exports = {
  name: "kiss",
  category: "SFW",
  description: "Sends random kiss gif",
  usage: "[command]",
  run: async (client, message, args) => {

    let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      if(!slapUser) return message.channel.send("Por favor mencione alguem");
      if (message.mentions.users.first().id === "747543982803910716") return message.channel.send(`Perdão **${message.author}**, já estou comprometida :3`);

    var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
      if (!message.channel) {
        return message.channel.send(errMessage);
      }  
    async function work() {
    let owo = (await neko.sfw.kiss());
    const slapEmbed = new Discord.MessageEmbed()
        .setDescription(`**<:NG_lov_u_SS:771014285333364767>  ${message.author}  Deu Um Beijão Em  ${message.mentions.users.first()} !**`)
        .setImage(owo.url)
        .setColor("#e11e61")
        .setURL(owo.url)
        .setTimestamp()
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
    message.channel.send(slapEmbed);
}
    work();
}
};
