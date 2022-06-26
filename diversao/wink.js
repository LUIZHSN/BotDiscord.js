const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    run: async (client, message, args) => {

        let wink = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if(!wink) return message.channel.send("por favor mencione alguem");

        const url = 'https://some-random-api.ml/animu/wink';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Um erro ocorreu!`)
        }

        const embed = new MessageEmbed()
            .setDescription(`${message.author} ឵឵ Deu uma piscadinha ឵឵para ឵឵${message.mentions.users.first()}`)
            .setImage(data.link)
            .setColor('e7e7e7')
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format: "png"}))
            
        await message.channel.send(embed)
    }
}