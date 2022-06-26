const client = require('nekos.life');
const superagent = require("snekfetch");
const Discord = require('discord.js');
const errors = require('../errors.json');
const neko = new client();

module.exports = {
  name: "slap",
  category: "SFW",
  description: "Sends random slap gif",
  usage: "[command]",
  run: async (client, message, args) => {

    let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      if(!slapUser) return message.channel.send("Por favor mencione alguem");
      if(message.mentions.users.first().id === "747543982803910716") return message.reply('Por que deseja me bater? O que eu te fiz?!');
      if(message.mentions.users.first().id === "269210749333667842") return message.reply(`Não deixarei você bater em meu criador!`);

    var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
      if (!message.channel) {
        return message.channel.send(errMessage);
      }  
    async function work() {
    let owo = (await neko.sfw.slap());
    const slapEmbed = new Discord.MessageEmbed()
        .setDescription(`**${message.author}  Deu Um Tapa Em  ${message.mentions.users.first()}!**`)
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
