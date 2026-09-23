import { useState } from 'react'
import './Explore.css'

const sections = [
  ['File-based routing', 'A versão web usa React Router para navegar entre Home, Login, Cadastro e Explore.'],
  ['Android, iOS e web', 'O projeto foi convertido para uma aplicação web responsiva, pronta para navegador.'],
  ['Imagens', 'Os assets existentes foram preservados em public/images para uso no front-end.'],
  ['Tema', 'A interface usa CSS global e pode ser expandida para suportar tema claro e escuro.'],
  ['Animações', 'Componentes podem receber animações CSS sem depender de react-native-reanimated.'],
]

export default function Explore() {
  return (
    <main className="explore-page">
      <section className="explore-container">
        <div className="explore-title">
          <h1>Explore</h1>
          <p>Esta tela substitui os componentes específicos do template Expo por elementos web.</p>
          <a href="https://docs.expo.dev" target="_blank" rel="noreferrer">Documentação do Expo ↗</a>
        </div>
        <div className="explore-sections">
          {sections.map(([title, text]) => <Collapsible key={title} title={title}>{text}</Collapsible>)}
        </div>
      </section>
    </main>
  )
}

function Collapsible({ title, children }: { title: string; children: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="collapsible">
      <button onClick={() => setOpen(value => !value)} aria-expanded={open}>
        <span>{title}</span><span>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="collapsible-content">{children}</div>}
    </div>
  )
}
