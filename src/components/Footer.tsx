export function Footer() {
  return (
    <footer style={{
      borderTop: '2px solid #fbbf24',
      padding: '2rem 1rem',
      marginTop: '3rem',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
          © 2026 UtilRock. Todos os direitos reservados.
        </p>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
          Sabedoria prática e ferramentas brutas para o seu dia a dia.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <a href="https://utilrock.com" style={{ color: '#fbbf24', textDecoration: 'none', marginRight: '1rem' }}>
            ← Voltar ao UtilRock
          </a>
        </div>
      </div>
    </footer>
  );
}
