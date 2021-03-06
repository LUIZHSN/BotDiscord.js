var weather = require('weather-js');
const Discord = require('discord.js')


module.exports.run = (client, message, args) => {
    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        //console.log(JSON.stringify(result, null, 2));
        if (!result) return message.channel.send(`Forneça uma cidade.`)
        if (!result[0]) return message.channel.send(`Essa cidade não existe.`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**Tempo em ${result[0].location.name}**`)
            .addField(`**Temperatura:**`, `${result[0].current.temperature}°C`, true)
            .addField(`**Sensação Térmica:**`, `${result[0].current.feelslike}°C`, true)
            .addField(`**Umidade:**`, `${result[0].current.humidity}%`, true)
            .addField(`**Vento:**`, `${result[0].current.windspeed}`, true)
            .setColor("RANDOM")
            .setThumbnail("https://i.imgur.com/tMSoF1p.png")
            .setTimestamp()
        message.channel.send(embed)

    });
};

exports.help = {
    name: `tempo`,
    aliases: ['clima']
};