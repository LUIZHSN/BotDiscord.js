const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require("./config.json");
client.config = config;


//Comando para mudar o status do bot de tempo em tempo 
client.on("ready", () => {
  let activities = [
    `${config.prefix}help`
    //`Utilize ${config.prefix}help`,
    //`🎮 Estou em ${client.guilds.cache.size} Servidores!`, //Mostra a quantidade total de servidores do bot
    //`💂‍♂️ Cuidando de //${client.channels.cache.size} Canais!`, //Mostra a quantidade total de canais de todos os servidores do bot
    //`😀 Estou Conversando Com //${client.users.cache.size} Pessoinhas! 💞`, //Mostra a quantidade total de usuarios incluindo os bot de todos os servidores do bot
    //`🖥️ Atualmente eu tenho ${client.commands.size} comandos`, //mostra o total de comandos do bot
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, { 
    type: "STREAMING", // WATCHING assistindo, LISTENING ouvindo, PLAYING jogando, STREAMING ao vivo
    url: "Aqui vc coloca o link da sua live para o bot redirecionar"
      }), 5000); //tempo de um status para o outro
  client.user
      .setStatus("online") //online online, idle ausente, dnd ocupado, invisible invisivel 
      .catch(console.error);
    console.log('Bot iniciado com ' + client.users.cache.size + ' usuários, em ' + client.channels.cache.size + ' canais de ' + client.guilds.cache.size + ' servidores.');
    console.log("Estou Online!")
});


client.commands = new Enmap();
client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  
  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./moderacao/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./moderacao/${file}`);
    let commandName = file.split(".")[0];
    //console.log(`carregado ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./diversao/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./diversao/${file}`);
    let commandName = file.split(".")[0];
    //console.log(`carregado ${commandName}`);
    client.commands.set(commandName, props);
  });
});
client.login(config.token);
