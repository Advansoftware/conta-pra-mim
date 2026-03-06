export interface Story {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  ageRange: string;
  readingTime: number;
  image: string;
  isPremium: boolean;
  isFeatured?: boolean;
  rating: number;
  content: StoryPage[];
}

export interface StoryPage {
  text: string;
  illustration?: string;
}

export const categories = [
  { id: "todos", label: "✨ Todas" },
  { id: "princesas", label: "👑 Princesas" },
  { id: "aventura", label: "⚔️ Aventura" },
  { id: "fantasia", label: "🧙 Fantasia" },
  { id: "animais", label: "🐾 Animais" },
  { id: "espaco", label: "🚀 Espaço" },
  { id: "fundo-do-mar", label: "🐠 Fundo do Mar" },
];

export const stories: Story[] = [
  {
    id: "1",
    title: "A Princesa e o Dragão Gentil",
    description: "A corajosa Princesa Luna descobre que o temido dragão do reino na verdade precisa de um amigo.",
    category: "princesas",
    categoryColor: "#e91e8c",
    ageRange: "4–8 anos",
    readingTime: 8,
    image: "https://images.unsplash.com/photo-1765947378880-babf58391ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmluY2VzcyUyMGNhc3RsZSUyMGZhbnRhc3klMjBjaGlsZHJlbiUyMHN0b3J5fGVufDF8fHx8MTc3MjgxMzc4NHww&ixlib=rb-4.1.0&q=80&w=600",
    isPremium: false,
    isFeatured: true,
    rating: 4.9,
    content: [
      {
        text: "Era uma vez, num reino encantado cercado de montanhas nevadas, uma princesa chamada Luna. Ao contrário das outras princesas, Luna não gostava de ficar no castelo esperando. Ela adorava explorar florestas, escalar rochas e desvendar mistérios.",
      },
      {
        text: "Um dia, um mensageiro chegou correndo ao castelo: 'Majestade! O Dragão Cinza foi visto nas cavernas do norte! Os aldeões estão com medo!' O rei ordenou que ninguém se aproximasse. Mas Luna sentiu que havia algo mais por trás daquela história.",
      },
      {
        text: "À noite, escondida sob seu manto azul, Luna escalou as montanhas e encontrou a caverna. Lá dentro, escutou um som que a surpreendeu: soluços. O enorme dragão cinza estava... chorando.",
        illustration: "https://images.unsplash.com/photo-1760256993941-ec41ccc6e376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        text: "'Por que você está triste?' perguntou Luna, sem medo. O dragão se assustou, mas ao ver a gentileza nos olhos da princesa, respondeu com voz baixa: 'Estou sozinho há cem anos. Todos fogem de mim porque sou diferente.' Luna sorriu: 'Eu também sou diferente. E acho que podemos ser grandes amigos.'",
      },
      {
        text: "Desde aquele dia, Luna e Faísca — como ela chamou o dragão — foram inseparáveis. Juntos, protegiam o reino e mostravam para todos que aparências enganam, e que a amizade verdadeira não tem forma.",
      },
    ],
  },
  {
    id: "2",
    title: "O Cavaleiro das Estrelas",
    description: "Pequeno Theo embarca numa jornada galáctica para devolver uma estrela perdida ao seu lugar no céu.",
    category: "espaco",
    categoryColor: "#5b21b6",
    ageRange: "5–10 anos",
    readingTime: 10,
    image: "https://images.unsplash.com/photo-1756640837293-ec5b89d350ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHJvY2tldCUyMHN0YXJzJTIwY2hpbGRyZW4lMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzcyODEzNzkwfDA&ixlib=rb-4.1.0&q=80&w=600",
    isPremium: false,
    isFeatured: true,
    rating: 4.8,
    content: [
      {
        text: "Theo tinha sete anos e um telescópio muito especial que pertencia ao seu avô. Toda noite, ele subia ao terraço da casa e olhava para o céu estrelado, aprendendo os nomes das constelações.",
      },
      {
        text: "Numa noite de sexta-feira, algo incrível aconteceu: uma luz dourada caiu do céu e pousou no quintal. Era uma estrela! Pequena como uma laranja, brilhante como mil velas, ela piscava e piscava — parecia pedindo socorro.",
      },
      {
        text: "Theo a pegou com cuidado e sentiu um formigamento nas mãos. A estrela projetou um mapa no ar: ela mostrava o caminho de volta para o seu lugar no céu, na constelação do Leão.",
        illustration: "https://images.unsplash.com/photo-1756640837293-ec5b89d350ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        text: "Com a estrela no bolso do casaco e o coração acelerado, Theo subiu no seu foguete de papelão — que, tocado pela magia da estrela, se transformou num foguete de verdade! Ele voou pela Via Láctea, passou por Saturno e chegou até o Leão.",
      },
      {
        text: "Quando Theo devolveu a estrela ao seu lugar, todo o céu brilhou mais forte em agradecimento. De volta para casa, ele olhou para cima e viu uma estrela que piscava mais do que as outras — ela piscava só para ele. E Theo sorriu, sabendo que tinha um amigo nos céus para sempre.",
      },
    ],
  },
  {
    id: "3",
    title: "A Sereia que Queria Dançar",
    description: "Marina sonha em dançar na terra, mas descobre que seu verdadeiro talento está nas profundezas do oceano.",
    category: "fundo-do-mar",
    categoryColor: "#0891b2",
    ageRange: "4–7 anos",
    readingTime: 7,
    image: "https://images.unsplash.com/photo-1563870411511-82510e84ec8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJtYWlkJTIwdW5kZXJ3YXRlciUyMGNvbG9yZnVsJTIwZmFudGFzeXxlbnwxfHx8fDE3NzI3OTk3MzN8MA&ixlib=rb-4.1.0&q=80&w=600",
    isPremium: true,
    rating: 4.7,
    content: [
      {
        text: "Marina era uma sereia diferente. Enquanto suas irmãs colecionavam conchas e nadavam em círculos, ela ficava horas observando os barcos passarem, imaginando como seria dançar com dois pés no chão.",
      },
      {
        text: "Um dia, uma velha fada do mar apareceu. 'Posso te dar pernas por uma tarde', disse ela, 'mas você terá que escolher: ficar na terra ou voltar para o mar.' Marina aceitou o desafio.",
      },
      {
        text: "Na terra, Marina tentou dançar — e caiu muitas vezes! Os passos eram difíceis, tudo era novo. Mas ela percebeu algo: quando dançava, pensava nos movimentos do oceano, nas ondas, nos corais balançando.",
        illustration: "https://images.unsplash.com/photo-1563870411511-82510e84ec8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        text: "De volta ao mar, Marina começou a criar sua própria dança — uma dança aquática, com redemoinhos e saltos, que encantou todos os seres do oceano. Ela descobriu que não precisava ser diferente do que era para ser especial.",
      },
    ],
  },
  {
    id: "4",
    title: "O Dragão que Tinha Medo do Fogo",
    description: "Braz é o único dragão do reino que não consegue cospe fogo — mas isso vai mudar quando o momento certo chegar.",
    category: "fantasia",
    categoryColor: "#dc2626",
    ageRange: "5–9 anos",
    readingTime: 9,
    image: "https://images.unsplash.com/photo-1760256993941-ec41ccc6e376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFnb24lMjBhZHZlbnR1cmUlMjBraWRzJTIwZmFudGFzeXxlbnwxfHx8fDE3NzI4MTM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    isPremium: true,
    rating: 4.6,
    content: [
      {
        text: "Na Grande Montanha dos Dragões, todos os filhotes aprendiam a cuspir fogo no terceiro aniversário. Todos — menos Braz. Cada vez que ele tentava, soltava apenas bolhas coloridas de sabão.",
      },
      {
        text: "Os outros dragões riam. 'Braz bolha!', chamavam. Ele se escondia atrás das pedras envergonhado, até que a sábia Dragoa Antiga o encontrou. 'Suas bolhas têm uma magia que o fogo não tem', disse ela.",
      },
      {
        text: "Quando um incêndio ameaçou a floresta ao redor da montanha, todos os dragões cuspiam fogo — e pioravam tudo! Foi Braz que salvou o dia: suas bolhas gigantes encheram-se de água e apagaram as chamas.",
      },
      {
        text: "Depois daquele dia, Braz foi chamado de 'O Dragão das Bolhas Mágicas', o protetor da floresta. Ele aprendeu que ser diferente não é uma fraqueza — é a sua maior força.",
      },
    ],
  },
  {
    id: "5",
    title: "A Floresta dos Animais Falantes",
    description: "Quando Sofia se perde na floresta, os animais a guiam para casa enquanto ensinam lições preciosas.",
    category: "animais",
    categoryColor: "#16a34a",
    ageRange: "3–6 anos",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1757873889053-f9c13d66387b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmNoYW50ZWQlMjBmb3Jlc3QlMjBhbmltYWxzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcyODEzNzg3fDA&ixlib=rb-4.1.0&q=80&w=600",
    isPremium: false,
    rating: 4.8,
    content: [
      {
        text: "Sofia tinha cinco anos e adorava explorar. Um dia, brincando perto de casa, ela entrou mais fundo na floresta do que deveria — e se perdeu. Quando percebeu, as árvores eram altas demais e o caminho havia sumido.",
      },
      {
        text: "Uma raposa laranja apareceu. 'Eu sei onde fica sua casa', disse ela, 'mas você precisa me ajudar primeiro.' A raposa queria atravessar um riacho, mas tinha medo da água. Sofia pegou galhos e fez uma pontezinha — e juntas atravessaram.",
      },
      {
        text: "Depois, uma coruja sábia mostrou o caminho, pedindo que Sofia resolvesse um enigma: 'O que fica maior quanto mais você tira?' Sofia pensou muito e respondeu: 'Um buraco!' A coruja gargalhou e apontou o norte.",
        illustration: "https://images.unsplash.com/photo-1757873889053-f9c13d66387b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        text: "Por fim, um cervo gentil levou Sofia até a borda da floresta, onde sua mãe a esperava abraçando uma lanterna. Sofia aprendeu três coisas: ajudar os outros, usar a inteligência e nunca ter medo de pedir ajuda.",
      },
    ],
  },
  {
    id: "6",
    title: "O Menino que Lia as Estrelas",
    description: "Miguel descobre que pode se comunicar com as estrelas através de seu diário mágico.",
    category: "fantasia",
    categoryColor: "#5b21b6",
    ageRange: "6–10 anos",
    readingTime: 11,
    image: "https://images.unsplash.com/photo-1664734978491-2d2b4f2e908a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBtYWdpY2FsJTIwc3RvcnklMjBuaWdodHxlbnwxfHx8fDE3NzI4MTM3ODR8MA&ixlib=rb-4.1.0&q=80&w=600",
    isPremium: true,
    rating: 4.9,
    content: [
      {
        text: "Miguel era um menino quieto e curioso. No seu aniversário de oito anos, sua avó lhe deu um diário de capa azul-escura com pequenas estrelas douradas. 'Este é especial', disse ela com um sorriso misterioso.",
      },
      {
        text: "Na primeira noite, Miguel escreveu seus pensamentos no diário. Quando apagou a luz, viu que as palavras brilhavam! E então apareceu uma resposta — escrita em luz de estrela: 'Olá, Miguel. Sou Altair, e vejo você toda noite do céu.'",
      },
      {
        text: "Por semanas, Miguel conversou com Altair. A estrela lhe contava sobre galáxias distantes, planetas coloridos e o silêncio bonito do universo. Miguel, por sua vez, contava sobre a escola, seus amigos e seus medos.",
        illustration: "https://images.unsplash.com/photo-1664734978491-2d2b4f2e908a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        text: "Um dia, Miguel estava triste porque havia brigado com seu melhor amigo. Altair escreveu: 'Mesmo estando muito longe uns dos outros, as estrelas de uma constelação permanecem juntas. Amizade verdadeira não se apaga.' Miguel pediu desculpas ao amigo no dia seguinte.",
      },
      {
        text: "O diário mágico continuou sendo o segredo mais precioso de Miguel. E toda noite, antes de dormir, ele olhava para o céu e sabia que estava sempre sendo observado com carinho por um amigo muito distante — mas sempre presente.",
      },
    ],
  },
  {
    id: "7",
    title: "A Aventura dos Três Irmãos",
    description: "Pedro, Ana e Guto precisam unir seus talentos diferentes para salvar o reino encantado.",
    category: "aventura",
    categoryColor: "#ea580c",
    ageRange: "6–11 anos",
    readingTime: 12,
    image: "https://images.unsplash.com/photo-1649750291589-8812197b698c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGZhaXJ5JTIwdGFsZSUyMGNvbG9yZnVsJTIwaWxsdXN0cmF0aW9uJTIwYm9va3xlbnwxfHx8fDE3NzI4MTM3ODR8MA&ixlib=rb-4.1.0&q=80&w=600",
    isPremium: true,
    rating: 4.7,
    content: [
      {
        text: "Pedro era forte e corajoso. Ana era inteligente e criativa. Guto era o mais novo e o mais engraçado dos três. Juntos, eram os irmãos mais barulhentos do vilarejo — e os mais unidos.",
      },
      {
        text: "Uma manhã, o reino acordou em silêncio. As flores haviam perdido as cores, os pássaros pararam de cantar e o sol brilhava fraco. A Fada da Primavera havia sido capturada pela Bruxa do Inverno Eterno.",
      },
      {
        text: "Os três irmãos decidiram partir para o castelo de gelo da bruxa. Pedro abriu caminho pela floresta nevada. Ana decifrou o mapa mágico e encontrou os atalhos. Guto fez a bruxa rir tanto com suas piadas que ela esqueceu de vigiar a prisão.",
        illustration: "https://images.unsplash.com/photo-1649750291589-8812197b698c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      },
      {
        text: "Com a Fada da Primavera livre, o reino voltou a florescer. As cores voltaram, os pássaros cantaram e o sol aqueceu novamente. O rei ofereceu riquezas aos três — mas eles pediram apenas uma coisa: uma biblioteca cheia de histórias para ler juntos.",
      },
    ],
  },
  {
    id: "8",
    title: "O Coelho que Não Gostava de Cenouras",
    description: "Rufus é diferente de todos os coelhos — e sua estranha preferência alimentar vai salvar toda a colônia.",
    category: "animais",
    categoryColor: "#16a34a",
    ageRange: "3–7 anos",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1758874961414-e4f03066e0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwZmFtaWx5JTIwcmVhZGluZyUyMGJvb2tzJTIwaG9tZXxlbnwxfHx8fDE3NzI4MTM3OTB8MA&ixlib=rb-4.1.0&q=80&w=600",
    isPremium: false,
    rating: 4.5,
    content: [
      {
        text: "Rufus era um coelho branco muito fofo, mas com um problemão: ele não gostava de cenouras. 'Que horror!' diziam os outros coelhos. 'Todo coelho adora cenouras!' Rufus ficava vermelho de vergonha — mais vermelho do que qualquer cenoura.",
      },
      {
        text: "O que Rufus adorava mesmo era... morangos! Ele passava tardes inteiras no campo de morangos, sendo o único coelho por lá. Um dia, percebeu que um campo enorme de morangos estava crescendo bem no caminho de uma avalanche.",
      },
      {
        text: "Enquanto todos os coelhos dormiam no campo de cenouras, Rufus correu para avisar. Graças ao caminho que ele conhecia — o do morango — todos conseguiram escapar a tempo da avalanche.",
      },
      {
        text: "Depois daquele dia, Rufus não precisou mais se envergonhar. E alguns coelhos curiosos até experimentaram os morangos. 'Hmm... é bom mesmo!' admitiram. Ser diferente, descobriram todos, pode ser exatamente o que salva o dia.",
      },
    ],
  },
];
