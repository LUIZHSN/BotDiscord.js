const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "bot-info",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Estatísticas da Anko')
            .setColor("RANDOM")
            .addFields(
                {
                    name: '🌐 Servidores',
                    value: `Estou em ${client.guilds.cache.size} servidores.`,
                    inline: true
                },
                {
                    name: '💻 Canais',
                    value: `Estou em ${client.channels.cache.size} canais.`,
                    inline: true
                },
                {
                    name: '👥 Usuários do servidor',
                    value: `Estou com ${client.users.cache.size} usuários`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '🖥️ Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: '📅 Data de inscrição',
                    value: client.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                }
            )
            .setTimestamp()
	        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

        await message.channel.send(embed)
    }
}