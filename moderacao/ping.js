const Discord = require("discord.js");

exports.run = async(client, message, bot, args) => {
    let embed = new Discord.MessageEmbed() 
    	.setTitle(message.author.username)
    	.setColor("RANDOM")
    	.setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
    	.setDescription(`<a:load:778329374323245068> Calculando...`)

    let embed2 = new Discord.MessageEmbed() 
    	.setTitle(message.author.username)
    	.setColor("RANDOM")
    	.setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
    	.setDescription("<a:load:778329374323245068> Espero que não esteja alto...")

    let embed_ping = new Discord.MessageEmbed() 
    	.setTitle(message.author.username)
    	.setColor("RANDOM")
    	.setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
    	.addField(` Ping`,[`<:network:776805982910283807> \`${parseInt(client.ws.ping)}\` ms\n`])
	const msg = await message.channel.send(message.author, embed) 
	
    setTimeout(() => {
      msg.edit(embed2)
	}, 2000) 
	
    setTimeout(() => { 
      msg.edit(embed_ping)
    }, 3500)

}
