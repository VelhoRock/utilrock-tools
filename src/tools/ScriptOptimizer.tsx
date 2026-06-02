import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ScriptOptimizer() {
  const [script, setScript] = useState('');
  const [targetTime, setTargetTime] = useState(60);
  const [result, setResult] = useState<{ words: number; wordsPerSecond: number; suggestion: string } | null>(null);

  const calculate = () => {
    const words = script.trim().split(/\s+/).length;
    const wordsPerSecond = words / targetTime;
    
    let suggestion = '';
    if (wordsPerSecond < 2) {
      suggestion = 'Seu roteiro está lento. Considere adicionar mais conteúdo ou aumentar a velocidade de fala.';
    } else if (wordsPerSecond > 2.5) {
      suggestion = 'Seu roteiro está rápido demais. Considere remover algumas palavras ou aumentar o tempo.';
    } else {
      suggestion = 'Seu roteiro está no ritmo perfeito! Pronto para gravar.';
    }

    setResult({ words, wordsPerSecond, suggestion });
  };

  const wordCount = script.trim().split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        title="Otimizador de Roteiros"
        subtitle="Ajuste seu roteiro para o tempo ideal de vídeo"
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
              Cole seu roteiro aqui:
            </label>
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              placeholder="Digite ou cole seu roteiro..."
              style={{
                width: '100%',
                minHeight: '300px',
                padding: '1rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                border: '2px solid #fbbf24',
                backgroundColor: '#000',
                color: '#fff',
                resize: 'vertical'
              }}
            />
            <p style={{ color: '#9ca3af', marginTop: '0.5rem', fontSize: '0.875rem' }}>
              Palavras: {wordCount}
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Tempo de Vídeo Desejado (segundos)
            </label>
            <input
              type="number"
              value={targetTime}
              onChange={(e) => setTargetTime(parseInt(e.target.value) || 60)}
              placeholder="60"
              style={{ width: '100%' }}
            />
          </div>

          <button 
            onClick={calculate}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.125rem',
              fontWeight: 'bold'
            }}
          >
            Otimizar Roteiro
          </button>
        </div>

        {result && (
          <div style={{
            backgroundColor: '#1f2937',
            border: '2px solid #fbbf24',
            padding: '2rem'
          }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '1.5rem' }}>Análise</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Total de Palavras:</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{result.words}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Palavras por Segundo:</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
                {result.wordsPerSecond.toFixed(2)} palavras/seg
              </p>
            </div>

            <div style={{
              backgroundColor: '#000',
              border: '2px solid #fbbf24',
              padding: '1.5rem'
            }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Recomendação:</p>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#fbbf24' }}>
                {result.suggestion}
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#000', border: '1px solid #fbbf24' }}>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                💡 Dica: A velocidade ideal de fala é entre 2-2.5 palavras por segundo para vídeos em português.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
