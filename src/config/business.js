/* ==========================================================================
   CONFIGURAÇÃO DO NEGÓCIO — edite apenas este ficheiro para mudar o site.
   --------------------------------------------------------------------------
   • Textos, cores, serviços, imagens, horário e contactos estão todos aqui.
   • Para esconder algo (ex.: WhatsApp ou email), deixe o valor como "".
   • Imagens: cole qualquer link do Unsplash no mesmo formato dos de baixo.
   ========================================================================== */

// width: 1600 para fotos grandes (hero, faixas), 800 para os cartões de serviço
const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

const business = {
  /* ---------- Identidade ---------- */
  name: 'Sónia Araújo Cabeleireiros',
  brandName: 'Sónia Araújo',
  brandSub: 'Cabeleireiros',
  slogan: 'Beleza é sentir-se bem.',
  area: 'Brufe',
  language: 'pt-PT',

  /* ---------- Logótipo ----------
     Se tiver o ficheiro original do logótipo (PNG ou SVG), coloque-o na pasta
     /public e escreva aqui o nome, ex.: '/logo-sa.png'. Enquanto estiver vazio,
     o site desenha o monograma "SA" em dourado. */
  logo: {
    image: '',
    monogram: ['S', 'A'],
  },

  /* ---------- Cores (usadas em todo o site) ---------- */
  colors: {
    background: '#FAF5F0', // creme quente — fundo da página
    surface: '#FFFFFF', // cartões
    neutral: '#F3E9E1', // secções alternadas
    ink: '#2B211D', // texto principal
    inkMuted: '#6B5D55', // texto secundário
    accent: '#C0694A', // terracota — botões, destaques, faixa e rodapé
    accentHover: '#A9573A',
    accentSoft: '#F7E6DE', // terracota muito claro — círculos dos ícones
    line: '#E8DACF', // linhas e divisórias
    onAccent: '#FFFFFF', // texto sobre o terracota
    gold: '#A9834A', // dourado do logótipo
  },

  /* ---------- Contactos ---------- */
  contact: {
    phoneDisplay: '919 919 390',
    phoneHref: '+351919919390',
    whatsapp: '351919919390', // número com indicativo; deixe vazio ('') para esconder o WhatsApp
    whatsappDisplay: '919 919 390',
    email: '', // ex.: 'geral@exemplo.pt' — deixe vazio para esconder o email
    // Instagram do salão: escreva só o nome da conta, sem @ (ex.: 'soniaaraujocabeleireiros').
    // Enquanto estiver vazio, os links do Instagram ficam escondidos.
    instagram: 'soniaaraujocabeleireiros',
    addressLine1: 'Rua Manuel Ferreira Loureiro, Loja 16',
    addressLine2: '4760-248 Brufe, Portugal',
    mapsUrl:
      'https://maps.google.com/?cid=4174194645947020909&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  },

  /* ---------- Horário ---------- */
  hours: [
    { day: 'Segunda-feira', time: 'Encerrado', closed: true },
    { day: 'Terça-feira', time: '9:00 – 12:30 · 14:30 – 19:00' },
    { day: 'Quarta-feira', time: '9:00 – 12:30 · 14:30 – 19:00' },
    { day: 'Quinta-feira', time: '9:00 – 12:30 · 14:30 – 19:00' },
    { day: 'Sexta-feira', time: '9:00 – 12:30 · 14:30 – 19:00' },
    { day: 'Sábado', time: '9:00 – 19:00' },
    { day: 'Domingo', time: 'Encerrado', closed: true },
  ],
  // Versão curta do horário (rodapé)
  hoursSummary: [
    { label: 'Terça a sexta', value: '9:00 – 12:30 · 14:30 – 19:00' },
    { label: 'Sábado', value: '9:00 – 19:00' },
    { label: 'Domingo e segunda', value: 'Encerrado' },
  ],

  /* ---------- Menu ---------- */
  nav: {
    links: [
      { label: 'Início', href: '#top' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Sobre nós', href: '#sobre' },
      { label: 'Contactos', href: '#contactos' },
    ],
    cta: { label: 'Marcar hora', href: '#contactos' },
    callLabel: 'Ligar para o salão: 919 919 390', // botão de telefone no telemóvel
    openMenuLabel: 'Abrir menu',
    closeMenuLabel: 'Fechar menu',
  },

  /* ---------- Destaque (hero) ---------- */
  hero: {
    eyebrow: 'Beleza é sentir-se bem',
    // A última linha aparece na cor de destaque
    titleLines: ['Cabelo cuidado.', 'Feito para si.', 'Aqui em Brufe.'],
    text: 'Cortes, cor, penteados e tratamentos com atendimento personalizado, na Rua Manuel Ferreira Loureiro, Loja 16.',
    primaryCta: { label: 'Marcar a sua visita', href: '#contactos' },
    secondaryCta: { label: 'Ver serviços', href: '#servicos' },
    trust: [
      { icon: 'clock', text: 'Terça a sábado, desde as 9:00' },
      { icon: 'phone', text: '919 919 390', link: 'phone' },
    ],
    image: unsplash('1580618672591-eb180b1a973f'),
    imageAlt: 'Cabeleireira a fazer um brushing com escova redonda a uma cliente de cabelo comprido',
    badgeText: 'Sónia Araújo · Cabeleireiros · ',
  },

  /* ---------- Pontos fortes (faixa por baixo do hero) ---------- */
  // icon: 'person' | 'calendar' | 'clock' | 'pin' | 'phone' | 'heart'
  features: [
    {
      icon: 'person',
      title: 'Atendimento personalizado',
      text: 'Cada visita começa por ouvir o que procura. O serviço é pensado para si.',
    },
    {
      icon: 'calendar',
      title: 'Marcação simples',
      text: 'Ligue ou envie mensagem por WhatsApp para o 919 919 390.',
    },
    {
      icon: 'clock',
      title: 'Aberto ao sábado',
      text: 'Ao sábado estamos abertos das 9:00 às 19:00, sem pausa para almoço.',
    },
    {
      icon: 'pin',
      title: 'Aqui em Brufe',
      text: 'Rua Manuel Ferreira Loureiro, Loja 16, perto de casa e do trabalho.',
    },
  ],

  /* ---------- Serviços ---------- */
  services: {
    eyebrow: 'Os nossos serviços',
    title: 'Cuidado para cada cabelo',
    text: 'Do corte à cor, passando pelos tratamentos, cada serviço começa por ouvir o que procura.',
    link: { label: 'Marcar um serviço', href: '#contactos' },
    cardLinkLabel: 'Marcar',
    items: [
      {
        title: 'Cortes',
        text: 'Um corte pensado para o seu rosto, fácil de manter em casa.',
        image: unsplash('1562322140-8baeececf3df', 800),
        imageAlt: 'Cabeleireira a finalizar um corte curto',
      },
      {
        title: 'Coloração',
        text: 'Do retoque suave à mudança de cor, escolhida consigo.',
        image: unsplash('1554519934-e32b1629d9ee', 800),
        imageAlt: 'Cabelo comprido com madeixas loiras, visto de costas',
      },
      {
        title: 'Penteados',
        text: 'Brushing e apanhados para um dia especial ou para a semana.',
        image: unsplash('1582095133179-bfd08e2fc6b3', 800),
        imageAlt: 'Cabeleireira a fazer um apanhado com cabelo enrolado',
      },
      {
        title: 'Tratamentos',
        text: 'Cabelo seco ou danificado volta a ter brilho e força.',
        image: unsplash('1595476108010-b4d1f102b1b1', 800),
        imageAlt: 'Cliente a relaxar no lavatório durante um tratamento',
      },
    ],
  },

  /* ---------- Sobre nós (faixa de cor) ---------- */
  about: {
    eyebrow: 'Sobre nós',
    titleLines: ['Beleza é', 'sentir-se bem.'],
    paragraphs: [
      'A Sónia Araújo Cabeleireiros é um salão de bairro em Brufe. Fazemos cortes, penteados, coloração e tratamentos, sem precisar de ir à cidade.',
      'Antes de pegar na tesoura, ouvimos o que procura. Sai daqui com um cabelo fácil de tratar em casa.',
    ],
    cta: { label: 'Como chegar', href: 'maps' },
    image: unsplash('1617897903246-719242758050'),
    imageAlt: 'Frasco de óleo para o cabelo sobre uma tábua de madeira, com ramos de eucalipto',
  },

  /* ---------- Testemunhos (a secção só aparece se a lista tiver itens) ---------- */
  testimonials: {
    eyebrow: 'O que dizem',
    title: 'As nossas clientes',
    items: [], // ex.: { quote: '...', name: 'Ana' }
  },

  /* ---------- Contactos ---------- */
  contactSection: {
    // Bloco de chamada com a foto oval
    ctaTitleLines: ['Vamos marcar a sua', 'próxima visita?'],
    ctaText: 'Ligue ou envie mensagem por WhatsApp. Encontramos uma hora que lhe dê jeito.',
    ctaImage: unsplash('1626383137804-ff908d2753a2'),
    ctaImageAlt: 'Interior de um salão de cabeleireiro luminoso, com cadeiras e espelhos',
    callLabel: 'Ligar',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
    // Detalhes
    eyebrow: 'Contactos',
    title: 'Visite-nos em Brufe',
    addressTitle: 'Onde estamos',
    hoursTitle: 'Horário',
    contactTitle: 'Contacte-nos',
    directionsLabel: 'Abrir no Google Maps',
    todayLabel: 'Hoje',
    form: {
      title: 'Pedido de marcação',
      nameLabel: 'Nome',
      phoneLabel: 'Telefone',
      serviceLabel: 'Serviço',
      servicePlaceholder: 'Escolha um serviço',
      messageLabel: 'Dia preferido ou observações',
      messagePlaceholder: 'Ex.: sábado de manhã, corte e cor',
      submitLabel: 'Preparar pedido',
      successTitle: 'Obrigado',
      // Texto honesto: o formulário não envia nada sozinho (não há servidor)
      successText:
        'Os seus dados estão prontos, mas este formulário não os envia ao salão. Para confirmar o dia e a hora, envie o pedido por WhatsApp (a mensagem já vai escrita) ou ligue-nos.',
      whatsappSendLabel: 'Enviar pedido por WhatsApp',
      whatsappIntro: 'Olá, gostaria de fazer uma marcação.',
      resetLabel: 'Voltar ao formulário',
      emailSubject: 'Pedido de marcação',
    },
  },

  /* ---------- Perguntas frequentes (só aparece se a lista tiver itens) ---------- */
  faq: {
    eyebrow: 'Dúvidas',
    title: 'Perguntas frequentes',
    items: [], // ex.: { question: '...', answer: '...' }
  },

  /* ---------- Rodapé ---------- */
  footer: {
    note: 'Beleza é sentir-se bem.',
    linksTitle: 'Navegação',
    hoursTitle: 'Horário',
    contactTitle: 'Contactos',
    rights: 'Todos os direitos reservados.',
  },

  /* ---------- Página ---------- */
  meta: {
    title: 'Sónia Araújo Cabeleireiros · Cabeleireiro em Brufe',
    description:
      'Sónia Araújo Cabeleireiros — cortes, penteados, coloração e tratamentos com atendimento personalizado. Rua Manuel Ferreira Loureiro, Loja 16, Brufe.',
  },
}

export default business
