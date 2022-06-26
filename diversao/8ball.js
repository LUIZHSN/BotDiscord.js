exports.run = async (client, message) => {

    let respostas = [
      '<:klipartz:779533869950042132> Sim.',
      '<:klipartz:779533869950042132> Pergunte mais tarde.',
      '<:klipartz:779533869950042132> Melhor você não saber.',
      '<:klipartz:779533869950042132> Isso é meio obvio.',
      '<:klipartz:779533869950042132> Não tenho certeza',
      '<:klipartz:779533869950042132> Hmm acho que Sim.',
      '<:klipartz:779533869950042132> Não posso opinar sobre isso.',
      '<:klipartz:779533869950042132> Provavelmente sim.',
      '<:klipartz:779533869950042132> Tu é mano?',
      '<:klipartz:779533869950042132> Ah sei de nada não...fui!',
      '<:klipartz:779533869950042132> Sei de nada o-0.',
      '<:klipartz:779533869950042132> Hmm acho que não.',
      '<:klipartz:779533869950042132> Não.',
      '<:klipartz:779533869950042132> Também queria saber...',
      '<:klipartz:779533869950042132> A minha resposta não importa, o que importa é você seguir o seu coração!😘',
      '<:klipartz:779533869950042132> Minhas fontes dizem que não',
      '<:klipartz:779533869950042132> Vai incomodar outra pessoa, obrigado',
      '<:klipartz:779533869950042132> Não posso falar sobre isso'
    ]
    
    const BallNum = Math.floor(Math.random() * respostas.length); 
    const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec)); 
    
    msg = await message.channel.send('<:klipartz:779533869950042132> Pergunta difícil, vamos ver...');
    await delay(2000); 
    msg.edit(respostas[BallNum]);
    
    }