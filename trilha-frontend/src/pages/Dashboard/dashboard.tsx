import './style.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* TÍTULO DA PÁGINA */}
      <p className="page-title">
        Página de Dashboard do Aluno
      </p>

      {/* CARD PRINCIPAL */}
      <div className="dashboard-card">

        {/* HEADER */}
        <header className="dashboard-header">

          {/* LOGO */}
          <h1 className="logo">
            Trilha+
          </h1>

          {/* MENU */}
          <nav className="menu">
            <a href="#" className="active">
              Dashboard
            </a>

            <a href="#">
              Trilhas de Estudo
            </a>

            <a href="#">
              Testes de Nível
            </a>
          </nav>

          {/* SAIR */}
          <button className="logout-button">
            Sair
          </button>

        </header>

        {/* TESTES */}
        <main className="tests-container">

          {/* MATEMÁTICA */}
          <button className="test-card">
            <h2>
              Teste de Matemática
            </h2>

            <div className="test-icon">
              🧮
            </div>
          </button>

          {/* PORTUGUÊS */}
          <button className="test-card">
            <h2>
              Teste de Português
            </h2>

            <div className="test-icon">
              🗣️
            </div>
          </button>

          {/* GEOGRAFIA */}
          <button className="test-card">
            <h2>
              Teste de Geografia
            </h2>

            <div className="test-icon">
              🌎
            </div>
          </button>

        </main>

        {/* ESPAÇO */}
        <div className="dashboard-content" />

        {/* FOOTER */}
        <footer className="footer">
          Todos os direitos reservados a FIAP
        </footer>

      </div>

    </div>
  );
}