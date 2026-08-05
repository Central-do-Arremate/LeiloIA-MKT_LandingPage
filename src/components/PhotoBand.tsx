import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Container from './Container'
import { TAG } from './type'

interface PhotoBandProps {
  /** Fallback e maior variante do srcSet. */
  src: string
  /** Variante menor, pra telas estreitas. */
  srcSmall: string
  alt: string
  /** Etiqueta mono sobre a foto (opcional). */
  tag?: string
  /** Frase curta sobre a foto (opcional). */
  caption?: string
  /**
   * Recorte vertical da foto dentro da faixa (`object-position`). A faixa é
   * bem mais larga que alta, então o corte come muito do topo e da base — é
   * aqui que se decide o que sobra. Menor = mostra mais do topo da foto.
   */
  objectPosition?: string
  /** Altura da faixa. O padrão serve pra respiro entre capítulos. */
  className?: string
}

/**
 * Faixa fotográfica full-bleed usada como respiro entre capítulos.
 *
 * A foto não tem borda: ela derrete no fundo por máscara, não por gradiente
 * de cor. Isso importa porque o fundo da página muda com o scroll — um
 * gradiente pintado numa cor fixa denunciaria a emenda; a máscara deixa o
 * <ScrollBackdrop> aparecer por baixo, qualquer que seja o tom da vez.
 *
 * A máscara fica no contêiner PARADO e o parallax no filho: se as duas coisas
 * morassem no mesmo elemento, o degradê da máscara viajaria junto com a
 * imagem e a borda voltaria a ser um corte reto.
 */
export default function PhotoBand({
  src,
  srcSmall,
  alt,
  tag,
  caption,
  objectPosition = '50% 50%',
  className = 'h-[52vw] max-h-[30rem] min-h-[15rem]',
}: PhotoBandProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 32%, #000 70%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 32%, #000 70%, transparent)',
        }}
      >
        {/* Sobra de altura pro parallax não descobrir a barra em nenhum ponto. */}
        <motion.div className="absolute -inset-y-[9%] inset-x-0" style={{ y: reduceMotion ? 0 : y }}>
          <img
            src={src}
            srcSet={`${srcSmall} 960w, ${src} 1920w`}
            sizes="100vw"
            alt={alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{ objectPosition }}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Rebaixa a foto pro escuro da página: sem isso ela grita mais que a
            tipografia e rouba a hierarquia da seção seguinte. */}
        <div className="absolute inset-0 bg-leilo-base/45" />
        {/* Sombra na base só onde a legenda pousa. */}
        {(tag || caption) && (
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-leilo-base/85 to-transparent" />
        )}
      </div>

      {(tag || caption) && (
        <Container className="relative flex h-full flex-col justify-end pb-8 sm:pb-10">
          {tag && <p className={`${TAG} text-leilo-go`}>{tag}</p>}
          {caption && (
            <p className="mt-2 max-w-md text-sm font-medium leading-relaxed text-white/90 sm:text-base">{caption}</p>
          )}
        </Container>
      )}
    </div>
  )
}
