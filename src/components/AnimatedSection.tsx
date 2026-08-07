/**
 * Nome antigo do <Reveal>.
 *
 * As 19 seções importam `AnimatedSection`; reexportar aqui faz todas herdarem
 * o gatilho novo (ver hooks/useReveal) sem um commit que toca 19 arquivos só
 * pra trocar um identificador. Em seções novas, importe `motion/Reveal`.
 */
export { default } from './motion/Reveal'
