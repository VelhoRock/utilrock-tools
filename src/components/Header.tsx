interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header style={{
      borderBottom: '2px solid #fbbf24',
      padding: '2rem 1rem',
      marginBottom: '2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'inline-block',
          backgroundColor: '#fbbf24',
          color: '#000',
          padding: '0.5rem 1rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          border: '2px solid #fbbf24'
        }}>
          FERRAMENTA
        </div>
        <h1 style={{ marginBottom: '0.5rem' }}>{title}</h1>
        {subtitle && <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>{subtitle}</p>}
      </div>
    </header>
  );
}
