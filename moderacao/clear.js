const Discord = require("discord.js");

const bot = new Discord.Client();
        exports.run = async (client, message, args) => {
          if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`**<:error:776841201298309160> | ${message.author}** Você é fraco lhe falta permissão de \` Gerenciar Mensagens \` para usar esse comando`);
          const deleteCount = parseInt(args[0], 10);
          
          if (!deleteCount || deleteCount < 1 || deleteCount > 99)
            return message.channel.send(`**<:lixo:776845111706910751> | ${message.author}** Forneça um número de \`1\` a \`99\` para fazer a limpeza no chat.`)(msg).delete({timeout: 5000})
          const fetched = await message.channel.messages.fetch({
            limit: deleteCount + 1
          });
          message.channel.bulkDelete(fetched);
          message.channel.send(`**<:concluido:776841207296032770> | ${message.author}** Pediu pra eu limpar **${args[0]}** mensagens nesse chat!`).then(msg => msg.delete({timeout: 5000}))
            .catch(error =>
              console.log(`**<:error:776841201298309160> | ${message.author}** Não foi possível deletar mensagens devido a: ${error}`)
            );
        };
exports.help = {
name:'clear'    
}