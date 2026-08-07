import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Paleta LeiloIA (família CDA, verde-dominante). Mesmos hex do app —
      // ia.centraldoarremate.com.br — para a campanha não destoar do produto.
      colors: {
        leilo: {
          base: '#201e1f', // fundo primário
          section: '#181618', // seções rebaixadas / zona "acima da linha"
          panel: '#2a2729', // cards, painéis, campos
          go: '#cdff1e', // A assinatura: veredito, CTAs, GO/lucro
          'go-dim': '#7c961b', // margem apertada — positivo, mas fino
          stop: '#fb4527', // prejuízo / acima do teto (única contracor)
          muted: '#a0a0a0', // texto secundário, labels
        },
      },
      fontFamily: {
        // Display: Oswald (fallback web do Eurostile usado no app).
        // Corpo: Inter. Readout numérico/máquina: Martian Mono.
        // Self-hosted via @fontsource-variable (ver src/index.css) — nomes
        // "Variable" são os registrados por esses pacotes.
        euro: ["'Oswald Variable'", "'Inter Variable'", 'sans-serif'],
        sans: ["'Inter Variable'", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ["'Martian Mono Variable'", 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      screens: {
        xs: '400px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(205,255,30,0.5)' },
          '50%': { boxShadow: '0 0 0 8px rgba(205,255,30,0)' },
        },
        'scroll-cue': {
          '0%': { transform: 'translateY(0)', opacity: '0.2' },
          '50%': { transform: 'translateY(7px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '0.2' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        'pulse-green': 'pulse-green 2s ease-out infinite',
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
      },
      boxShadow: {
        'go-glow': '0 0 0 1px rgba(205,255,30,0.35), 0 0 24px -4px rgba(205,255,30,0.45)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config
