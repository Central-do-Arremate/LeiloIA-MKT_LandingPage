// Tons do fundo da página.
//
// Antes cada seção pintava o próprio bloco alternando entre dois cinzas, o que
// produz um corte seco exatamente na fronteira — o leitor vê a emenda. Aqui a
// página tem UMA escala só, e o <ScrollBackdrop> interpola entre os tons
// conforme o scroll. A troca acontece no meio da seção, não na borda dela.
//
// Regra da paleta: todos os tons ficam entre #12 e #24 de luminância (a página
// continua escura do começo ao fim) — o que muda é o viés de cor e um degrau
// leve de claro/escuro, seguindo o assunto da seção. Verde = domínio da marca,
// âmbar = risco, frio = desorganização.
export const TONE = {
  /** Hero — a base da identidade, igual ao app. */
  abertura: '#201e1f',
  /** A conta do lote — aperta e esquenta: é a seção do prejuízo possível. */
  custo: '#191312',
  /** O método — primeiro viés verde: aqui a marca começa a responder. */
  metodo: '#1a1d17',
  /** Do link ao laudo. */
  processo: '#181a19',
  /** Dois perfis. */
  publico: '#1e1c1d',
  /** Da memória pro sistema — viés frio: é a seção da bagunça. */
  ruido: '#15141b',
  /** Agente SNIPER — verde mais fundo, o ponto mais "máquina" da página. */
  agente: '#121710',
  /** Inventário. */
  entrega: '#1b1a19',
  /** Planos — sobe um degrau de luz: é a vitrine, precisa respirar. */
  oferta: '#242121',
  /** Confiança. */
  prova: '#181c18',
  /** Resultados. */
  resultado: '#1c1b1c',
  /** Quem está por trás. */
  autor: '#221f1e',
  /** Filosofia. */
  limite: '#171618',
  /** Antes × Depois. */
  contraste: '#1a1718',
  /** Os dois lados. */
  lados: '#161719',
  /** FAQ. */
  duvida: '#191919',
  /** Aviso — viés âmbar, a única seção que sinaliza risco pelo fundo. */
  alerta: '#231b16',
  /** Manifesto — a virada, verde escuro. */
  virada: '#131810',
  /** A conta final. */
  fechamento: '#181618',
  /** CTA final — o verde mais aberto da página, o clímax. */
  climax: '#1e2614',
  /** Rodapé — desce de volta pro escuro e encerra. */
  rodape: '#141314',
} as const

export type Tone = (typeof TONE)[keyof typeof TONE]
