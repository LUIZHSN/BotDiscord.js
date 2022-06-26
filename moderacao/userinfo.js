const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "user-info",
    category: "extra",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        
        let status;
        switch (user.presence.status) {
            case "online":
                status = " <:online:776290108059680809> Online";
                break;
            case "dnd":
                status = " <:dnd2:776542056901902347> Não Perturbar";
                break;
            case "idle":
                status = " <:idle:776542047666176011> Ausente";
                break;
            case "offline":
                status = " <:offline2:776541364653260869> Offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`Informações de ${user.user.username}`)
            .setColor("RANDOM")
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "👥 Nome: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Tag: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "Status atual: ",
                    value: status,
                    inline: true
                },
                {
                    name: "🎮 Atividade: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `O usuário não está jogando!`,
                    inline: true
                },
                {
                    name: 'Link do Avatar: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: '📅 Conta criada dia: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '📅 Entrou no servidor em: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Cargos do Usuário: ',
                    value: user.roles.cache.map(role => role.toString()).join("** **"),
                    inline: true
                }
            )
        .setTimestamp()
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

        await message.channel.send(embed)
    }
}