import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ListOrganizer() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{
    original: number;
    cleaned: number;
    items: string[];
  } | null>(null);

  const organize = () => {
    // Dividir por quebras de linha ou vírgulas
    const rawItems = input.split(/[\n,;]/).map(item => item.trim()).filter(item => item.length > 0);
    
    // Remover duplicados (case-insensitive)
    const seen = new Set<string>();
    const uniqueItems: string[] = [];
    
    rawItems.forEach(item => {
      const lower = item.toLowerCase();
      if (!seen.has(lower)) {
        seen.add(lower);
        uniqueItems.push(item);
      }
    });

    // Ordenar alfabeticamente
    uniqueItems.sort((a, b) => a.localeCompare(b, 'pt-BR'));

    setResult({
      original: rawItems.length,
      cleaned: uniqueItems.length,
      items: uniqueItems
    });
  };

  const copyToClipboard = () => {
    if (result) {
      const text = result.items.join('\n');
      navigator.clipboard.writeText(text);
      alert('Copiado para a área de transferência!');
    }
  };

  const downloadAsText = () => {
    if (result) {
      const text = result.items.join('\n');
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', 'lista-organizada.txt');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        title="Organizador de Listas"
        subtitle="Limpe, organize e remova duplicados instantaneamente"
      />

      <main className="container" style={{ flex: 1, paddingBottom: '2rem' }}>
        <div style={{
          backgroundColor: '#1f2937',
          border: '2px solid #fbbf24',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Cole sua lista (uma por linha ou separadas por vírgula):
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Item 1&#10;Item 2&#10;Item 3&#10;&#10;ou&#10;&#10;Item 1, Item 2, Item 3"
              style={{
                width: '100%',
                minHeight: '250px',
                padding: '1rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                border: '2px solid #fbbf24',
                backgroundColor: '#000',
                color: '#fff',
                resize: 'vertical'
              }}
            />
          </div>

          <button 
            onClick={organize}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.125rem',
              fontWeight: 'bold'
            }}
          >
            Organizar Lista
          </button>
        </div>

        {result && (
          <div style={{
            backgroundColor: '#1f2937',
            border: '2px solid #fbbf24',
            padding: '2rem'
          }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '1.5rem' }}>Resultado</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                backgroundColor: '#000',
                border: '2px solid #fbbf24',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Itens Originais:</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>
                  {result.original}
                </p>
              </div>

              <div style={{
                backgroundColor: '#000',
                border: '2px solid #fbbf24',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Itens Únicos:</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>
                  {result.cleaned}
                </p>
              </div>
            </div>

            {result.original > result.cleaned && (
              <div style={{
                backgroundColor: '#000',
                border: '2px solid #fbbf24',
                padding: '1rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <p style={{ color: '#fbbf24', fontWeight: 'bold' }}>
                  ✓ {result.original - result.cleaned} duplicados removidos
                </p>
              </div>
            )}

            <div style={{
              backgroundColor: '#000',
              border: '2px solid #fbbf24',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              maxHeight: '400px',
              overflowY: 'auto'
            }}>
              <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Lista Organizada:</h3>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {result.items.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '0.75rem',
                    backgroundColor: '#1f2937',
                    border: '1px solid #fbbf24',
                    borderRadius: '2px'
                  }}>
                    {idx + 1}. {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <button 
                onClick={copyToClipboard}
                style={{
                  backgroundColor: '#fbbf24',
                  color: '#000'
                }}
              >
                Copiar
              </button>
              <button 
                onClick={downloadAsText}
                style={{
                  backgroundColor: '#fbbf24',
                  color: '#000'
                }}
              >
                Baixar TXT
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
