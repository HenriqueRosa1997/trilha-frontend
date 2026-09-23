import { useNavigate } from 'react-router-dom'
import '../../styles/layout.css'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home page-shell">
      <header className="site-header">
        <div className="logo">Trilha+</div>
        <button className="login-button home-login" onClick={() => navigate('/login')}>Login</button>
      </header>

      <main className="home-content">
        <h1>Trilhe seu próprio caminho</h1>
        <p>
          Trilhas criadas para atender as necessidades específicas de cada aluno. Tire dúvidas e
          melhore suas notas, tudo no seu ritmo e na palma da sua mão!
        </p>
        <button className="primary-button register-button" onClick={() => navigate('/register')}>
          Faça seu cadastro
        </button>
      </main>

      <footer className="site-footer"><span>Todos os direitos reservados a FIAP</span></footer>
    </div>
  )
}
