/**
 * Os cinco atos da página.
 *
 * Antes as 19 seções eram uma lista plana: o leitor não tinha como saber onde
 * estava nem quanto faltava, e a estrutura de capítulos que `config/tones.ts`
 * já descrevia nos comentários era invisível na tela. Agrupar em atos torna
 * essa estrutura legível sem inventar conteúdo nenhum — os atos são o arco que
 * a copy já fazia.
 *
 * O `at` é o carimbo de tempo que o trilho mostra ao abrir cada ato. Não é
 * enfeite: é a régua de 00:00 a 00:52 que a própria página cita como duração
 * de uma avaliação (ver PASSOS em data/landing.ts). A página inteira dura o
 * que dura um laudo.
 */
export interface Act {
  /** Numeração exibida. É sequência de verdade — a ordem carrega o argumento. */
  n: string
  /** Nome do ato, em display. */
  name: string
  /** Palavra do watermark. Curta, senão não cabe a 18vw. */
  watermark: string
  /** Carimbo de tempo no trilho ao entrar no ato. */
  at: string
  /** Uma linha do que o ato faz com o leitor. Vai no marcador. */
  claim: string
  /** Itens do ticker que fecha o ato. Saem de fatos já afirmados na página. */
  ticker: string[]
}

export const ACTS: Act[] = [
  {
    n: '01',
    name: 'A conta',
    watermark: 'CONTA',
    at: '00:00',
    claim: 'O que um lote cobra depois do lance',
    ticker: ['PEÇAS', 'REPAROS', 'DANOS APARENTES', 'PONTOS CRÍTICOS', 'TAXAS', 'O QUE VOCÊ ESQUECEU'],
  },
  {
    n: '02',
    name: 'O método',
    watermark: 'MÉTODO',
    at: '00:08',
    claim: 'Como a LeiloIA chega no número',
    ticker: ['+1 ANO DE TREINO', 'METODOLOGIA LÉO RIBEIRO', 'AGENTE SNIPER', 'LAUDO EM MENOS DE 1 MINUTO'],
  },
  {
    n: '03',
    name: 'A prova',
    watermark: 'PROVA',
    at: '00:21',
    claim: 'De onde vem a autoridade do método',
    ticker: ['350+ ARREMATES', '100+ MENTORADOS', '7+ ANOS DE MERCADO', '30+ VEÍCULOS SIMULTÂNEOS'],
  },
  {
    n: '04',
    name: 'A oferta',
    watermark: 'OFERTA',
    at: '00:34',
    claim: 'O que você recebe e quanto custa',
    ticker: ['SEM FIDELIDADE', 'CANCELE QUANDO QUISER', 'HISTÓRICO INCLUSO', 'LINKS DAS PEÇAS'],
  },
  {
    n: '05',
    name: 'A decisão',
    watermark: 'DECISÃO',
    at: '00:52',
    claim: 'O que ainda pesa antes de assinar',
    ticker: ['LEIA O EDITAL', 'FAÇA VISTORIA', 'CONSIDERE AS TAXAS', 'A DECISÃO CONTINUA SUA'],
  },
]
