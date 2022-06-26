const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    run: async (client, message, args) => {
        const url = 'https://neko-love.xyz/api/v1/cry';
        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Um erro ocorreu!`)
        }
        const embed = new MessageEmbed()
            .setDescription(`**😢 ${message.author} Esta muito triste!**`)
            .setImage(data.url)
            .setColor("#5be5fc")
            .setURL(data.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format: "png"}))
        await message.channel.send(embed)
    }
}