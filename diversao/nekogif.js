const client = require('nekos.life');
const superagent = require("snekfetch");
const Discord = require('discord.js');
const errors = require('../errors.json');
const neko = new client();

module.exports = {
  name: "NekoGif",
  category: "SFW",
  description: "Sends random Neko gif",
  usage: "[command]",
  run: async (client, message, args) => {
    var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
      if (!message.channel) {
        return message.channel.send(errMessage);
      }  
        async function work() {
        let owo = (await neko.sfw.nekoGif());
        const slapEmbed = new Discord.MessageEmbed()
        .setDescription(`**<:2_smug:778045602469904405> NekoGif !**`)
        .setImage(owo.url)
        .setColor("#9A2EFF")
        .setURL(owo.url)
        .setTimestamp()
        .setFooter(`nekos.life v2`, message.author.displayAvatarURL({format: "png"}));
        message.channel.send(slapEmbed);
}
      work();
}
};
