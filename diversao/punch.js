const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    run: async (client, message, args) => {
        let wink = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!wink) return message.channel.send("por favor mencione alguem");
        if(message.mentions.users.first().id === "747543982803910716") return message.reply('Por que deseja me bater? O que eu te fiz?!');
      if(message.mentions.users.first().id === "269210749333667842") return message.reply(`Não deixarei você bater em meu criador!`);
      
        const url = 'https://neko-love.xyz/api/v1/punch';
        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Um erro ocorreu!`)
        }
        const embed = new MessageEmbed()
            .setDescription(` ${message.author}  Deu Um Soco Em ${message.mentions.users.first()} !`)
            .setImage(data.url)
            .setColor('e7e7e7')
            .setURL(data.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format: "png"}))
        await message.channel.send(embed)
    }
}