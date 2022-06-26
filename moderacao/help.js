const Discord = require("discord.js");
const prefixes = require("../config.json")
const config = require("../config.json")
const fs = require('fs')

module.exports.run = async (client, message, args) => {
    let prefixes = JSON.parse(fs.readFileSync("./config.json", "utf8"));
        if(!prefixes[message.guild.id]){
            prefixes[message.guild.id] = {
                prefixes: config.prefix
            };
        }
    let prefix = prefixes[message.guild.id].prefixes;
        var embed = new Discord.MessageEmbed()
            .setAuthor('Quer Minha Ajuda? Ok UwU', 'https://i.imgur.com/FOMx2Dn.png') 
            .setDescription(` <a:1_SetaVermelha:778056457673113630> __[Vote em mim e ganhe um Cookie!](https://zuraaa.com/bots/747543982803910716/votar)__  `)
            .setColor("RANDOM")
            .setThumbnail('https://i.imgur.com/Lx3pPCw.gif')
            .addField(`឵Utilize as reações para navegar entra as paginas e achar o que você esta procurando `,` 🎭 • **RolePlay:** Comandos de diversão para te alegrar e alegrar o seu servidor.\n\n 👥 • **Utilidade:** Comandos para você ver algumas informações uteis.\n\n 🛠️ • **Moderação:** Comandos para você moderar seu servidor e deixá-lo mais agradavel.\n\n 🔞 • **Diferenciados:** Alguns comandos de gente boa\n\n 💂‍♂️ • **Aleatórios:** O nome ja é meio auto-sugestivo.\n឵ ឵`, false)
            .setTimestamp()
	        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
        message.channel.send({embed}).then(msg=> {
        msg.delete({ timeout: 180000 })
        msg.react('🎭').then(r=>{
        msg.react('👥')
        msg.react('🛠️')
        msg.react('🔞')
        msg.react('💂‍♂️')
        msg.react('◀️')
    })

  const utilfilter = (reaction, user) => reaction.emoji.name === '🎭' && user.id === message.author.id;
  const funfilter = (reaction, user) => reaction.emoji.name === '👥' && user.id === message.author.id;
  const diverfilter = (reaction, user) => reaction.emoji.name === '🛠️' && user.id === message.author.id;
  const economyfilter = (reaction, user) => reaction.emoji.name === '🔞' && user.id === message.author.id;
  const devfilter = (reaction, user) => reaction.emoji.name === '💂‍♂️' && user.id === message.author.id;
  const voltarfilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
  const util = msg.createReactionCollector(utilfilter, { time: 180000 });
  const fun = msg.createReactionCollector(funfilter, { time: 180000 });
  const diver = msg.createReactionCollector(diverfilter, { time: 180000 });
  const economy = msg.createReactionCollector(economyfilter, { time: 180000 });
  const dev = msg.createReactionCollector(devfilter, { time: 180000 });
  const voltar = msg.createReactionCollector(voltarfilter, { time: 180000 });



  util.on('collect', r1 => { 
   r1.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail('https://i.imgur.com/sebwoEi.gif')
        .setAuthor(`🎭 » RolePlay!`)
        .addField(`Comandos normais para você se entreter.`, `<a:1_SetaVermelha:778056457673113630> **${prefix}Cat:**\n \`Ta afim de ver fotinhas de gatinhos fofos?\`\n<a:1_SetaVermelha:778056457673113630> **${prefix}Dog:**\n \`Prefere ver Dogs fofos?\`\n <a:1_SetaVermelha:778056457673113630> **${prefix}Cry:**\n \`Demostre para os outros que você esta triste.\`\n<a:1_SetaVermelha:778056457673113630> **${prefix}NekoGif:**\n\`Gifs de Nekos fofas.\`\n<a:1_SetaVermelha:778056457673113630> **${prefix}Laranjo:**\n\` Crie um meme do Laranjo!. \`\n<a:1_SetaVermelha:778056457673113630> **${prefix}Stonks:**\n\` Crie alguma coisa-SuperStonks com este comando! \`\n<a:1_SetaVermelha:778056457673113630> **${prefix}Wanted:**\n\` Crie um cartaz de procurado! \`\n<a:1_SetaVermelha:778056457673113630> **${prefix}Ship:**\n\` Veja se um casal daria certo! \``, false)
        .addField(`Comandos que você pode mencionar Seu amiginho:`,`**|** \` ${prefix}Cuddle \` **|**  \` ${prefix}Hug \` **|**  \` ${prefix}Kiss \` **|**  \`${prefix}Pat \` **|**  \` ${prefix}Poke \` **|**  \` ${prefix}Slap \` **|**  \` ${prefix}Tickle \` **|** \` ${prefix}Wink឵ \` **|** \` ${prefix}Punch \` **|**\n`, false)
        .setTimestamp()
        .setFooter(`Clique em ◀️ para voltar`);
      msg.edit(embed);
  })

  fun.on('collect', r2 => { 
   r2.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail('https://i.imgur.com/jhj71db.gif')
        .setAuthor(`👥 » Utilidades!`)
        .addField(`Aqui ficam os comandos quem contem informações básicas que podem ser interessantes.`, ` <a:1_SetaVermelha:778056457673113630> **${prefix}BotInfo:**\n \` Mostra algumas informações rápidas minhas. \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}ServerInfo:**\n \` Mostra algumas informações básicas do servidor. \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}UserInfo:**\n \` Mostra as suas informações básicas no servidor. \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}ServerIcon:**\n \` Veja o Ícone do Servidor! \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}UpTime:**\n \` Mostra a quanto tempo eu to acordada. \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}Tempo:**\n \` Veja como esta a temperatura de qualquer cidade! \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}Emoji:**\n \` Pegue qualquer emoji do discord! \``, false)
        .setTimestamp()
        .setFooter(`Clique em ◀️ para voltar`);
      msg.edit(embed);
  })

  diver.on('collect', r3 => { 
   r3.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail('https://i.imgur.com/ChXTsBW.gif')
        .setAuthor(`🛠️ » Moderação!`)
        .addField(`Aqui ficam os comandos para você manter a ordem e/ou deixar o servidor mais seguro.\n\n`, `<a:1_SetaVermelha:778056457673113630> **${prefix}Ban**:\n\` Mencione um usuario e o motivo para BANIR ele do servidor. \`\n\n<a:1_SetaVermelha:778056457673113630> **${prefix}Clear**:\n\` Diga quantas mensagens você quer que eu limpe do chat. \`\n\n<a:1_SetaVermelha:778056457673113630> **${prefix}Kick**:\n\` Mencione um usuario e o motivo para EXPULSAR ele do servidor. \`\n\n<a:1_SetaVermelha:778056457673113630> **${prefix}Lock**:\n\` Bloqueei um canal para ninguem mandar mensagem. \`\n\n<a:1_SetaVermelha:778056457673113630> **${prefix}Ping**:\n\` Posso calcular o seu ping com o discord, duvida ?. \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}Slowmode**:\n\` Diga o tempo que você quer o eu coloque no modo lento do chat. [Ex. 5s]. \``, false)
        .setTimestamp()
        .setFooter(`Clique em ◀️ para voltar`);
      msg.edit(embed);
  })

  economy.on('collect', r4 => { 
   r4.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail('https://i.imgur.com/rqfv4GH.gif')
        .setAuthor(`🔞 » Diferenciados!`)
        .addField(`Comandos que você precisa mencionar alguem:\n\n`, ` <a:1_SetaVermelha:778056457673113630> **${prefix}Fuck**\n\` Faça "secso" com outra pessoa hihihi. \`\n <a:1_SetaVermelha:778056457673113630> **${prefix}Blowjob:**\n \`Faça outra pessoa pagar um Glub Glub pra você. \`\n <a:1_SetaVermelha:778056457673113630> **${prefix}Spank:**\n\` De umas palmadinhas em alguem que foi muito levado. \``, false)
        .addField('Aqui tem umas coisinhas a mais:',`**|**\` Hentai \` **|** \` HentaiAnal \` **|** \` HentaiBlowJob \` **|** \` HentaiBoobs \` **|** \` HentaiClassic \` **|** \` HentaiEro \` **|** \` HentaiEroYuri \` **|** \` HentaiFeet \` **|** \` HentaiFemdom \` **|** \` HentaiFutanari \` **|** \` HentaiGif \` **|** \` HentaiGirlSolo \` **|** \` HentaiGirlSoloGif \` **|** \` HentaiKitsune \` **|** \` HentaiKuni \` **|** \` HentaiLesbian \` **|** \` HentaiPussy \` **|** \` HentaiTits \` **|** \` HentaiTrap \` **|** \` HentaiYuri \`**|**`, false)
        .setFooter(`Clique em ◀️ para voltar`);
      msg.edit(embed);
  })

  dev.on('collect', r5 => { 
   r5.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.displayAvatarURL())
        .setAuthor(`💂‍♂️ » Aleatórios!`)
        .setThumbnail('https://i.imgur.com/6VHIr5g.gif')
        .addField(`Comandos Aleatórios, Por que não?`, ` <a:1_SetaVermelha:778056457673113630> **${prefix}Avatar:**\n\` Utilize para ver o seu ou mencione alguem para ver o avatar dela. \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}8ball:**\n\` Pergunte a bola Nº8 qualquer coisa. \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}CoinFlip:**\n\` Tire Cara ou Coroa para ver se você esta com sorte mesmo. \`\n\n <a:1_SetaVermelha:778056457673113630> **${prefix}Icons:**\n\` Algumas imagens que podem ser legais para você, ou não. \``, false)
        .setFooter(`Clique em ◀️ para voltar`);
      msg.edit(embed);
  })

    voltar.on('collect', r5 => { 
      r5.users.remove(message.author.id)
        embed = new Discord.MessageEmbed()
        .setAuthor('Quer Minha Ajuda? Ok UwU', 'https://i.imgur.com/FOMx2Dn.png') 
        .setDescription(` <a:1_SetaVermelha:778056457673113630> __[Vote em mim e ganhe um Cookie!](https://zuraaa.com/bots/747543982803910716/votar)__  `)
        .setColor("RANDOM")
        .setThumbnail('https://i.imgur.com/Lx3pPCw.gif')
        .addField(`឵Utilize as reações para navegar entra as paginas e achar o que você esta procurando `,` 🎭 • **RolePlay:** Comandos de diversão para te alegrar e alegrar o seu servidor.\n\n 👥 • **Utilidade:** Comandos para você ver algumas informações uteis.\n\n 🛠️ • **Moderação:** Comandos para você moderar seu servidor e deixá-lo mais agradavel.\n\n 🔞 • **Diferenciados:** Alguns comandos de gente boa\n\n 💂‍♂️ • **Aleatórios:** O nome ja é meio auto-sugestivo.\n឵ `, false)
        .setTimestamp()
	      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
    msg.edit(embed);
  })
})
}
exports.help = {
  name: 'ajuda',
  aliases: ['help', 'comandos', 'commands']
}