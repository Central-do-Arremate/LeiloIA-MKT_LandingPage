// Copy da landing de campanha da LeiloIA. Fonte da verdade: copy longa de
// vendas fornecida pelo cliente (2026-08) — headlines afiadas, claims
// preservados. Preços aqui são ESTÁTICOS de propósito: esta LP é standalone,
// não fala com o catálogo do app; mudança de preço = editar aqui e redeployar.

// ── S1 · Hero ───────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'IA treinada por quem já fez 350+ arremates',
  h1Lines: ['Avalie carros de leilão', 'em menos de 1 minuto.'] as const,
  greenLine: 1, // índice da linha que leva o verde-assinatura
  sub: 'Menos tempo fazendo contas. Menos risco de esquecer custos importantes. Mais clareza pra decidir se vale a pena arrematar.',
  lead: 'Uma inteligência artificial treinada durante mais de um ano com a metodologia de Leonardo Ribeiro — 7+ anos de mercado, 350+ arremates, validada por 100+ mentorados. Ela identifica custos, busca peças, avalia o risco e organiza suas oportunidades antes de você decidir quanto oferecer.',
  ctaPrimary: 'Quero avaliar meu próximo carro',
  ctaSecondary: 'Ver como funciona',
  proofPlate: [
    { label: 'Treino', value: '+1 ano' },
    { label: 'Arremates', value: '350+' },
    { label: 'Mentorados', value: '100+' },
    { label: 'Laudo', value: '< 1 min' },
  ],
}

export const TICKER_ITEMS = ['AVALIAÇÃO EM MENOS DE 1 MINUTO', 'METODOLOGIA LÉO RIBEIRO', '350+ ARREMATES', 'AGENTE SNIPER']

// ── S2 · A conta do lote ────────────────────────────────────────────────────
export const CONTA = {
  eyebrow: 'A conta do lote',
  title: 'Antes de dar um lance, descubra o que aquele carro pode realmente custar.',
  lead: 'Uma avaliação superficial pode fazer uma oportunidade aparentemente lucrativa se transformar em prejuízo. Não basta olhar o valor do lance.',
  ledgerTitle: 'O que a conta precisa incluir',
  ledger: [
    'O preço das peças necessárias',
    'Os custos de reparação',
    'Os danos aparentes',
    'Os pontos críticos daquele modelo',
    'A margem disponível para uso ou revenda',
    'O valor máximo que faz sentido vender',
  ],
  ledgerNote: 'Fazer tudo isso manualmente exige tempo, experiência e atenção.',
  answerTitle: 'O que a LeiloIA faz por você',
  answers: [
    'Avaliação em menos de 1 minuto',
    'Possíveis custos de peças e reparos',
    'Links das peças consideradas na análise',
    'Nenhum ponto importante esquecido',
    'Histórico das avaliações realizadas',
    'Oportunidades organizadas num só lugar',
    'Agente SNIPER pra qualquer dúvida',
    'Lembretes dos leilões avaliados',
  ],
  cta: 'Quero mais segurança antes do lance',
}

// ── S3 · O método ───────────────────────────────────────────────────────────
export const METODO = {
  eyebrow: 'O método',
  title: 'Não é uma IA genérica. É um método treinado por mais de um ano.',
  paragraphs: [
    'A LeiloIA foi desenvolvida para auxiliar na avaliação de veículos de leilões extrajudiciais. Você cola o link do próprio leilão e a inteligência artificial aplica a metodologia que Leonardo Ribeiro usa nas próprias avaliações — ensinada ao sistema num treinamento extensivo de mais de um ano.',
    'Ela não foi criada apenas para responder perguntas sobre carros. Foi treinada especificamente para analisar veículo de leilão: valor estimado das peças, possíveis reparos, danos identificados, pontos críticos do veículo e os custos relevantes para a recuperação.',
    'A proposta não é entregar um número aleatório. É aplicar, por meio da tecnologia, uma metodologia que já vinha sendo usada na prática — e ensinada a mais de 100 mentorados.',
  ],
  fichaTitle: 'Ficha de treinamento',
  stats: [
    { label: 'Tempo de treino', value: '+1 ano' },
    { label: 'Veículos arrematados', value: '350+' },
    { label: 'Mentorados', value: '100+' },
    { label: 'Anos de mercado', value: '7+' },
  ],
  fontesTitle: 'Fontes do treinamento',
  fontes: [
    'Experiência prática no mercado',
    'Critérios usados nas avaliações reais',
    'A metodologia ensinada aos mentorados',
    'Dúvidas recorrentes de iniciantes e profissionais',
    'Situações reais encontradas em veículos de leilão',
    'Custos que costumam ser ignorados numa análise',
  ],
  honesty:
    'A LeiloIA não substitui completamente a análise de um profissional e não elimina os riscos naturais de um leilão. Ela é uma ferramenta de apoio à decisão — com grande parte da metodologia de quem já atua profissionalmente nesse mercado.',
}

// ── S4 · Do link ao laudo (cronômetro) ──────────────────────────────────────
export const PASSOS = {
  eyebrow: 'Do link ao laudo',
  title: 'Veja como uma avaliação acontece.',
  timed: [
    {
      stamp: '00:00',
      title: 'Informe os dados do veículo',
      body: 'Adicione as informações solicitadas pela plataforma sobre o carro que deseja analisar.',
    },
    {
      stamp: '00:08',
      title: 'A LeiloIA aplica a metodologia',
      body: 'A inteligência artificial analisa os dados com base nos critérios ensinados por Leonardo Ribeiro.',
    },
    {
      stamp: '00:52',
      title: 'Receba a avaliação',
      body: 'Uma análise com os principais custos e pontos de atenção — em menos de 1 minuto.',
    },
  ],
  checkpoint: '< 1 min',
  untimedTag: 'Quando precisar',
  untimed: [
    {
      title: 'Consulte peças e reparos',
      body: 'Acesse os links das peças consideradas e entenda a composição dos custos.',
    },
    {
      title: 'Tire dúvidas com o Agente SNIPER',
      body: 'Converse com uma IA treinada com o conteúdo e a metodologia do Léo.',
    },
    {
      title: 'Consulte tudo novamente',
      body: 'As avaliações ficam no histórico da sua conta, prontas pra comparar.',
    },
  ],
}

// ── S5 · Dois perfis ────────────────────────────────────────────────────────
export const PERFIS = {
  eyebrow: 'Para quem é',
  title: 'Para quem está começando — e para quem já vive disso.',
  iniciante: {
    tag: 'Perfil — Iniciante',
    items: [
      'Ainda não se sente seguro para avaliar um carro',
      'Não sabe quais métricas considerar',
      'Tem dificuldade para identificar os danos',
      'Não sabe estimar o preço das peças',
      'Não sabe quanto custa uma recuperação',
      'Tem medo de esquecer algum custo importante',
      'Quer começar com uma metodologia organizada',
      'Precisa de apoio antes dos primeiros arremates',
    ],
  },
  profissional: {
    tag: 'Perfil — Profissional',
    items: [
      'Avalia muitos veículos durante a semana',
      'Perde horas pesquisando peças e fazendo contas',
      'Precisa padronizar o processo de análise',
      'Quer reduzir tarefas manuais e repetitivas',
      'Quer centralizar as avaliações num só lugar',
      'Precisa consultar avaliações anteriores',
      'Busca velocidade para analisar mais oportunidades',
      'Quer tecnologia sem abandonar o próprio conhecimento',
    ],
  },
}

// ── S6 · Da memória pro sistema ─────────────────────────────────────────────
export const MEMORIA = {
  eyebrow: 'Organização',
  title: 'Imagine avaliar sem depender apenas da memória.',
  paragraphs: [
    'Você abre o edital. Encontra um veículo interessante. Pesquisa peças em três sites diferentes. Tenta calcular a recuperação. Anota valores. Abre outras oportunidades no mesmo dia.',
    'Depois de algum tempo, já não lembra exatamente os custos considerados em cada veículo. É nesse cenário que erros e esquecimentos acontecem.',
    'Com a LeiloIA, em vez de cálculos soltos, pesquisas espalhadas e anotações desconectadas, você tem uma plataforma que centraliza a avaliação — e mantém o histórico disponível para consulta.',
  ],
  // As "anotações" espalhadas que derivam atrás da prosa — a bagunça que o produto substitui.
  chips: [
    'farol dianteiro R$ 2.400??',
    'ver capô + parachoque',
    'FIPE 52.300',
    'km 87.412 conferir',
    'leilão quinta 14h',
    'porta ld arranhada',
    'R$ 3.150 + frete',
    'qual era o lote mesmo?',
  ],
}

// ── S7 · Agente SNIPER ──────────────────────────────────────────────────────
export const SNIPER = {
  eyebrow: 'Agente SNIPER',
  title: 'Um segundo Léo, disponível a qualquer hora.',
  lead: 'Todo o material de estudo, ensino e experiência do Leonardo Ribeiro, organizado numa inteligência artificial preparada pra responder dúvidas sobre o mercado de leilões.',
  body: 'Não é um chatbot genérico: é um agente treinado com uma base de conhecimento específica sobre avaliação e mercado de carros de leilão.',
  topics: [
    'O que observar em um veículo',
    'Como interpretar uma situação do leilão',
    'Quais custos considerar',
    'Como analisar possíveis danos',
    'Como organizar uma avaliação',
    'Cuidados antes de um arremate',
  ],
  chatQuestion: 'Airbag deflagrado: o que isso muda na conta do conserto?',
  chatAnswer:
    'Muda bastante. Além do módulo e das bolsas, considere o cinto pré-tensionado e o painel — em muitos modelos ele vem junto. Some as peças no laudo e confira se o custo ainda cabe abaixo do teto.',
}

// ── S8 · Inventário (o que você recebe) ─────────────────────────────────────
export const INVENTARIO = {
  eyebrow: 'Inventário',
  title: 'Tudo o que você recebe ao assinar.',
  items: [
    { ref: 'REF.01', name: 'Plataforma online', desc: 'Direto pelo navegador, sem instalar nada.' },
    { ref: 'REF.02', name: 'Avaliações mensais', desc: 'Cada plano tem sua franquia mensal de avaliações.' },
    { ref: 'REF.03', name: 'Análise em < 1 minuto', desc: 'Estimativa estruturada de custos e pontos de atenção.' },
    { ref: 'REF.04', name: 'Links das peças', desc: 'As referências usadas na composição da avaliação.' },
    { ref: 'REF.05', name: 'Histórico de avaliações', desc: 'Revise veículos avaliados sem refazer o processo.' },
    { ref: 'REF.06', name: 'Agente SNIPER', desc: 'Dúvidas respondidas com a metodologia do Léo.' },
    { ref: 'REF.07', name: 'Organização de oportunidades', desc: 'Os carros que interessam, centralizados.' },
    { ref: 'REF.08', name: 'Integração com agenda', desc: 'Lembretes da proximidade dos leilões avaliados.' },
    { ref: 'REF.09', name: 'Suporte na plataforma', desc: 'Ajuda sem sair do ambiente da LeiloIA.' },
  ],
}

// ── S9/S19 · Planos ─────────────────────────────────────────────────────────
export interface Plan {
  id: string
  name: string
  price: string
  /** Preço dividido pela franquia mensal — a régua de comparação entre planos. */
  perAnalysis: string
  /** Limites de uso, como aparecem no app. */
  quota: string
  desc: string
  features: string[]
  /** Selo acima do nome. Só o plano recomendado carrega um. */
  badge?: string
  highlight?: boolean
  cta: string
}

export const PLANOS: Plan[] = [
  {
    id: 'operador',
    name: 'Operador',
    price: 'R$ 19,90',
    perAnalysis: 'R$ 3,98 por análise',
    quota: '5 análises por dia · 5 por mês',
    desc: 'Para quem está começando e avalia poucos lotes por mês.',
    features: [
      'Acesso à plataforma LeiloIA',
      'Histórico de avaliações',
      'Links de compra das peças',
      'Integração com Google Agenda',
      'Créditos avulsos com 25% de desconto',
      'Suporte pela plataforma',
    ],
    cta: 'Começar com o Operador',
  },
  {
    id: 'profissional',
    name: 'Profissional',
    price: 'R$ 59,90',
    perAnalysis: 'R$ 3,00 por análise',
    quota: '20 análises por dia · 20 por mês',
    desc: 'Para quem acompanha oportunidades com frequência e precisa de volume.',
    features: [
      'Acesso à plataforma LeiloIA',
      'Agente SNIPER incluso',
      'Histórico de avaliações',
      'Links de compra das peças',
      'Integração com Google Agenda',
      'Créditos avulsos com 40% de desconto',
    ],
    badge: 'Especialista recomenda',
    highlight: true,
    cta: 'Quero o Profissional',
  },
  {
    id: 'especialista',
    name: 'Especialista',
    price: 'R$ 197,90',
    perAnalysis: 'R$ 1,98 por análise',
    quota: '100 análises por dia · 100 por mês',
    desc: 'Para profissionais e investidores que analisam um volume alto de veículos.',
    features: [
      'Acesso à plataforma LeiloIA',
      'Agente SNIPER incluso',
      'Histórico de avaliações',
      'Links de compra das peças',
      'Integração com Google Agenda',
      'Créditos avulsos com 70% de desconto',
    ],
    cta: 'Quero o Especialista',
  },
]

export const PLANOS_META = {
  eyebrow: 'Planos',
  title: 'Escolha o plano ideal para o seu volume de avaliações.',
  note: 'Assinatura mensal, renova todo mês. Sem fidelidade — cancele quando quiser.',
  bonusTag: 'Bônus',
  bonusNote: 'Agente SNIPER incluso nos planos Profissional e Especialista.',
  creditsNote:
    'Acabou a franquia? Assinante compra análises avulsas com desconto: 25% no Operador, 40% no Profissional e 70% no Especialista.',
}

// ── S10 · Confiança ─────────────────────────────────────────────────────────
export const CONFIANCA = {
  eyebrow: 'Confiança',
  title: '“Mas eu posso confiar na avaliação?” — pergunta certa.',
  lead: 'Dúvida legítima, principalmente quando existe dinheiro envolvido num possível arremate. A LeiloIA não foi configurada de forma superficial:',
  rows: [
    'Mais de 7 anos de experiência',
    'Mais de 350 arremates',
    'Resultados próprios',
    'Mais de 100 mentorados',
    'Avaliações em situações reais',
    'Conhecimento de peças, reparos e pontos críticos',
    'Testes e validações no desenvolvimento',
  ],
  verified: 'Verificado',
  honesty:
    'Ainda assim, nenhuma análise de veículo de leilão deve ser interpretada como garantia de lucro ou ausência de risco. A LeiloIA aumenta o nível de informação disponível — a decisão final continua sendo sua.',
}

// ── S11 · Resultados (VAZIO → seção oculta) ─────────────────────────────────
export interface Testimonial {
  quote: string
  name: string
  context: string
}
export interface CaseStudy {
  vehicle: string
  scenario: string
  findings: string
  decision: string
  result: string
}
// Preencher quando houver depoimentos reais — a seção aparece sozinha.
export const TESTIMONIALS: Testimonial[] = []
export const CASE_STUDY: CaseStudy | null = null
export const RESULTADOS_META = { eyebrow: 'Resultados', title: 'Quem usa, comprova.' }

// ── S12 · Quem está por trás ────────────────────────────────────────────────
export const LEO = {
  eyebrow: 'Quem está por trás',
  title: 'Leonardo Ribeiro: 7 anos, 350 arremates, 100 mentorados.',
  // Solte um retrato em src/assets/leo-ribeiro.(avif|webp|jpg) e aponte aqui.
  portrait: null as string | null,
  paragraphs: [
    'Meu nome é Leonardo Ribeiro — muita gente me conhece como Léo Ribeiro.',
    'Minha história no leilão começou há mais de sete anos, procurando um carro pra uso próprio. Arrematei meu primeiro veículo, usei por um mês e vendi. Nessa primeira operação, ganhei cerca de R$ 25 mil.',
    'Percebi que aquilo podia virar um negócio. Estudei o mercado a fundo, aperfeiçoei minhas avaliações, busquei investidores e aumentei a operação — cheguei a administrar mais de 30 veículos ao mesmo tempo.',
    'A LeiloIA nasceu pra tornar esse conhecimento acessível: colocar dentro de uma plataforma grande parte do raciocínio que uso pra avaliar um veículo, combinando experiência prática, organização e inteligência artificial.',
  ],
  signoff: 'Leonardo Ribeiro · Central do Arremate',
  milestones: [
    { label: '1ª operação', value: '≈ R$ 25 mil' },
    { label: 'Veículos simultâneos', value: '30+' },
    { label: 'Arremates', value: '350+' },
    { label: 'Mentorados', value: '100+' },
  ],
}

// ── S13 · Não substitui você ────────────────────────────────────────────────
export const FILOSOFIA = {
  eyebrow: 'Filosofia',
  title: 'A LeiloIA não nasceu para substituir você.',
  analogies: [
    { tool: 'Calculadora', who: 'não substitui quem entende de finanças' },
    { tool: 'GPS', who: 'não substitui o motorista' },
    { tool: 'Gestão', who: 'não substitui o empresário' },
  ],
  body: 'Da mesma forma, a LeiloIA não substitui o conhecimento, a vistoria, o edital ou a responsabilidade do comprador. Ela ajuda você a ganhar velocidade, seguir uma estrutura, reduzir esquecimentos e aplicar uma metodologia.',
  punchline: 'A IA faz o trabalho pesado. Você continua no controle da decisão.',
}

// ── S14 · Antes × Depois ────────────────────────────────────────────────────
export const COMPARACAO = {
  eyebrow: 'Antes × Depois',
  title: 'A mesma avaliação, dois processos.',
  sem: {
    tag: 'Sem método',
    items: [
      'Informações espalhadas em vários lugares',
      'Pesquisas repetidas',
      'Cálculos feitos manualmente',
      'Maior risco de esquecer custos',
      'Difícil comparar oportunidades',
      'Só a própria experiência como apoio',
      'Nenhum histórico centralizado',
      'Mais tempo gasto por veículo',
    ],
  },
  com: {
    tag: 'Com LeiloIA',
    items: [
      'Processo orientado pela plataforma',
      'Avaliação em menos de 1 minuto',
      'Custos apresentados de forma estruturada',
      'Links das peças disponíveis',
      'Pontos críticos considerados',
      'Histórico centralizado',
      'Apoio do Agente SNIPER',
      'Agilidade pra avaliar mais veículos',
    ],
  },
}

// ── S15 · Os dois lados ─────────────────────────────────────────────────────
export const DOIS_LADOS = {
  eyebrow: 'Os dois lados',
  title: 'O iniciante trava. O profissional repete.',
  iniciante:
    'O iniciante olha para o carro e não sabe o que considerar: quanto custa a recuperação, quais peças pesquisar, quais danos são críticos, até onde ir no lance. Para ele, a LeiloIA oferece direção — e acesso a uma metodologia.',
  profissional:
    'O profissional já sabe avaliar, mas repete o mesmo processo o dia inteiro: pesquisa, calcula, compara, registra, refaz contas. Para ele, a LeiloIA oferece velocidade, padronização e organização.',
}

// ── S16 · FAQ ───────────────────────────────────────────────────────────────
export const FAQ = {
  eyebrow: 'Perguntas frequentes',
  title: 'O que todo mundo pergunta antes de assinar.',
  items: [
    {
      q: 'A LeiloIA substitui completamente a análise de um profissional?',
      a: 'Não. Ela funciona como uma ferramenta de apoio e entrega grande parte da metodologia utilizada por um profissional experiente. A decisão final deve considerar também o edital, as condições do veículo, as regras do leilão e a sua análise.',
    },
    {
      q: 'Como a inteligência artificial calcula os custos do veículo?',
      a: 'Ela utiliza a metodologia ensinada por Leonardo Ribeiro durante mais de um ano de treinamento. O sistema considera informações do veículo, possíveis peças, reparos e pontos críticos relevantes para a avaliação.',
    },
    {
      q: 'Posso confiar nos valores apresentados?',
      a: 'A LeiloIA foi treinada e validada com base em experiência prática e em uma metodologia usada em avaliações reais. Os valores são estimativas e podem variar conforme região, fornecedor, estado do veículo, disponibilidade de peças e condições não identificadas.',
    },
    {
      q: 'A LeiloIA considera peças e reparos?',
      a: 'Sim. A ferramenta considera valores de peças, possíveis reparos e pontos críticos do veículo, além de fornecer os links das peças usadas como referência.',
    },
    {
      q: 'Funciona para qualquer veículo de leilão?',
      a: 'A ferramenta foi desenvolvida para veículos de leilões extrajudiciais. Ela não deve ser usada para avaliar veículos de leilões judiciais.',
    },
    {
      q: 'Preciso ter experiência com leilões?',
      a: 'Não. A LeiloIA foi desenvolvida tanto para iniciantes quanto para profissionais.',
    },
    {
      q: 'Quanto tempo demora uma avaliação?',
      a: 'Em condições normais, a avaliação é apresentada em menos de 1 minuto.',
    },
    {
      q: 'Onde encontro minhas avaliações anteriores?',
      a: 'Todas ficam disponíveis na aba de histórico, dentro da própria plataforma.',
    },
    {
      q: 'O que acontece quando eu atingir o limite mensal?',
      a: 'Você pode adquirir avaliações adicionais. O valor de cada avaliação extra varia conforme o plano contratado.',
    },
    {
      q: 'As avaliações não utilizadas acumulam?',
      a: 'Não. A franquia renova mensalmente e as avaliações não utilizadas não acumulam para o mês seguinte.',
    },
    {
      q: 'Como funciona o Agente SNIPER?',
      a: 'É uma inteligência artificial treinada com o material de estudo, ensino e experiência de Leonardo Ribeiro. Use para tirar dúvidas sobre avaliação e mercado de veículos de leilão.',
    },
    {
      q: 'Posso cancelar minha assinatura?',
      a: 'Sim. A assinatura pode ser cancelada de acordo com as condições apresentadas na plataforma.',
    },
    {
      q: 'Posso mudar de plano?',
      a: 'Sim. É possível solicitar a alteração do plano.',
    },
    {
      q: 'Como funciona o suporte?',
      a: 'O suporte é realizado dentro da própria plataforma LeiloIA.',
    },
    {
      q: 'Existe garantia?',
      a: 'Por se tratar de assinatura de acesso imediato a uma plataforma digital, não é oferecida garantia comercial adicional. Permanecem aplicáveis os direitos previstos na legislação vigente.',
    },
  ],
}

// ── S17 · Aviso ─────────────────────────────────────────────────────────────
export const AVISO = {
  header: 'Aviso — ferramenta de apoio',
  title: 'Leilão tem risco. A LeiloIA existe pra você enxergá-lo melhor.',
  intro:
    'As condições reais de um veículo podem variar, e alguns problemas podem não estar visíveis em fotos, descrições ou documentos. Por isso:',
  items: [
    'Leia sempre o edital',
    'Verifique as regras do leilão',
    'Considere taxas e despesas adicionais',
    'Faça vistoria quando possível',
    'Confirme as informações relevantes',
    'Não interprete a avaliação como garantia de lucro',
    'Use a LeiloIA como apoio à sua própria decisão',
  ],
  stamp: 'Apoio à decisão',
  footer:
    'A proposta da plataforma é aumentar sua velocidade, organização e nível de informação — não prometer resultados impossíveis nem eliminar os riscos do mercado.',
}

// ── S18 · Manifesto ─────────────────────────────────────────────────────────
export const MANIFESTO = {
  eyebrow: 'Uma nova forma de avaliar',
  intro:
    'Antes, era escolher entre gastar horas avaliando sozinho ou depender da disponibilidade de alguém mais experiente. Agora existe uma IA criada no Brasil, com metodologia própria, treinada por quem tem experiência prática e validada em situações reais.',
  lines: [
    'Tecnologia pra ganhar velocidade.',
    'Metodologia pra analisar com clareza.',
    'Organização pra acompanhar oportunidades.',
    'Experiência prática guiando o processo.',
  ],
}

// ── S19 · Fechamento (o custo de avaliar sem método) ────────────────────────
export const FECHAMENTO = {
  eyebrow: 'A conta final',
  title: 'Quanto custa avaliar sem organização?',
  lead: 'Talvez o maior custo não esteja na assinatura de uma ferramenta. Pode estar:',
  costs: [
    'Na oportunidade perdida porque você demorou',
    'No lance dado sem considerar um reparo',
    'Na peça esquecida fora da conta',
    'Nas horas gastas num carro que não valia',
    'Em vários lotes, nenhum controle',
    'Na insegurança que impede de começar',
    'Na desorganização que trava o crescimento',
  ],
  punchline: 'A partir de R$ 19,90 por mês, você passa a contar com uma plataforma preparada para acelerar e estruturar essa etapa.',
}

// ── S20 · CTA final ─────────────────────────────────────────────────────────
export const CTA_FINAL = {
  title: 'Você não precisa passar horas avaliando cada carro.',
  lines: [
    'Nem depender apenas da memória.',
    'Nem começar sem saber o que observar.',
    'Nem pesquisar tudo do zero a cada oportunidade.',
  ],
  body: 'Use uma metodologia construída com experiência real, organize suas avaliações, tire suas dúvidas — e tenha clareza antes de decidir quanto oferecer.',
  cta: 'Quero conhecer a LeiloIA',
  tagline:
    'LeiloIA: inteligência e experiência para ajudar você a avaliar carros de leilão com mais agilidade, organização e segurança.',
}
