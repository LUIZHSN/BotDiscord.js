const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  var array1 = ["cara", "coroa"];
  var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
    message.reply("Insira **Cara** ou **Coroa** na frente do comando.");
  } 
  else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send(`<:coroa:775393693346693151> | ${message.author} Deu **` + array1[rand] + `**, Você Ganhou Dessa Vez!`);
  }
  else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send(`<:cara:775393658819706890> | ${message.author} Deu **` + array1[rand] + `**, Você Perdeu Dessa Vez!`
    );
  }
};
