import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/layout.css'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Entrar', { email, senha })
  }

  return (
    <div className="auth-page">
      <div className="page-title-container"><span>Página de Login</span></div>
      <section className="auth-card login-card">
        <header className="auth-header"><div className="auth-logo">Trilha+</div></header>
        <form className="login-content" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label className="login-field"><span>Email</span><input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" /></label>
          <label className="login-field"><span>Senha</span><input type="password" value={senha} onChange={e => setSenha(e.target.value)} autoComplete="current-password" /></label>
          <div className="auth-actions">
            <button type="button" className="auth-button" onClick={() => navigate('/')}>Voltar</button>
            <button type="submit" className="auth-button">Entrar</button>
          </div>
        </form>
      </section>
      <footer className="auth-footer">Todos os direitos reservados a FIAP</footer>
    </div>
  )
}
