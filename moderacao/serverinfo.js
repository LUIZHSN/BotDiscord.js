const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "server-info",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
            //case "brasil":
            //    region = 'brasil'
            //    break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor("RANDOM")
            .setTitle(`Estatísticas do servidor: ${message.guild.name}`)
            .addFields(
                {
                    name: "👑 Dono(a): ",
                    value: `\`${message.guild.owner.user.tag}\``,
                    inline: true
                },
                {
                    name: "👥 Membros: ",
                    value: `Há  ${message.guild.memberCount} usuário!`,
                    inline: true
                },
                {
                    name: "👥 Membros Online: ",
                    value: `Há  ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,
                    inline: true
                },
                {
                    name: "<:botTag:776284383941230592> Total de Bots: ",
                    value: `Há  ${message.guild.members.cache.filter(m => m.user.bot).size} Bots!`,
                    inline: true
                },
                {
                    name: '<:booster:776281951006359582> Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Há  ${message.guild.premiumSubscriptionCount} Boosters` : `Não há boosters`,
                    inline: true
                },
                {
                    name: `🌎 Região: `,
                    value: `Brasil`, //region
                    inline: true
                },
                {
                    name: "<:online:776290108059680809> Cargos: ",
                    value: `Há  ${message.guild.roles.cache.size} Cargos neste servidor.`,
                    inline: true,
                },
                {
                    name: `<:verified:776283600005890079> Verificação do Server: `,
                    value: message.guild.verified ? 'Servidor verificado' : `Servidor ainda não verificado`,
                    inline: true
                },
                {
                    name: "📅 Criado em: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "😁 Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Há  ${message.guild.emojis.cache.size} emojis!` : 'Não há emojis' ,
                    inline: true
                }
            )
            .setTimestamp()
	        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
        await message.channel.send(embed)
    }
}