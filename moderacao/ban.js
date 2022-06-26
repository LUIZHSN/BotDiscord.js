const discord = require('discord.js')
module.exports = { 
    name: "ban",
    description: "ban someone",
    run: async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:error:776841201298309160> **|** ${message.author} Você não tem permissão para usar este cmd!`)
        let target = message.mentions.members.first()

        if(!target) return message.channel.send(`<:error:776841201298309160> **|** ${message.author} Por favor, mencione alguém para banir!`)
        if (message.mentions.users.first().id === "269210749333667842") return message.channel.send(`<:error:776841201298309160> **|** ${message.author} Não consigo Banir meu Dono`)

        if(target.id === message.author.id) {
            return message.channel.send(`<:error:776841201298309160> **|** ${message.author} Você não pode se Banir!`)
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.channel.send(`<:error:776841201298309160> **|** ${message.author} Por favor, diga o motivo!`)

        let embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Membro Banido")
        .addField("Usuario", target.user.tag)
        .addField("Staff", message.author.tag)
        .addField("Motivo", `${reason}`)
        await message.channel.send(embed)
        await target.ban({reason:reason})
    }
}