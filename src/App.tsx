import { useState } from 'react';
import { TattooCalculator } from './tools/TattooCalculator';
import { HoursConverter } from './tools/HoursConverter';
import { KitchenSurvival } from './tools/KitchenSurvival';
import { TravelChecklist } from './tools/TravelChecklist';
import { ScriptOptimizer } from './tools/ScriptOptimizer';
import { ListOrganizer } from './tools/ListOrganizer';

function App() {
  const [tool, setTool] = useState<string | null>(null);

  if (tool === 'tattoo') return <TattooCalculator />;
  if (tool === 'hours') return <HoursConverter />;
  if (tool === 'kitchen') return <KitchenSurvival />;
  if (tool === 'travel') return <TravelChecklist />;
  if (tool === 'script') return <ScriptOptimizer />;
  if (tool === 'list') return <ListOrganizer />;

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      padding: '2rem 1rem'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>UtilRock Tools</h1>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>
            Escolha uma ferramenta para começar
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          <div
            onClick={() => setTool('tattoo')}
            style={{
              backgroundColor: '#1f2937',
              border: '2px solid #fbbf24',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fbbf24';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎨</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Calculadora de Tatuagem</h3>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Calcule preços justos</p>
          </div>

          <div
            onClick={() => setTool('hours')}
            style={{
              backgroundColor: '#1f2937',
              border: '2px solid #fbbf24',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fbbf24';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏱️</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Conversor de Horas</h3>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Converta tempo em decimal</p>
          </div>

          <div
            onClick={() => setTool('kitchen')}
            style={{
              backgroundColor: '#1f2937',
              border: '2px solid #fbbf24',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fbbf24';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🍳</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Cozinha de Sobrevivência</h3>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Receitas práticas</p>
          </div>

          <div
            onClick={() => setTool('travel')}
            style={{
              backgroundColor: '#1f2937',
              border: '2px solid #fbbf24',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fbbf24';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧳</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Checklist de Viagem</h3>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Organize sua mala</p>
          </div>

          <div
            onClick={() => setTool('script')}
            style={{
              backgroundColor: '#1f2937',
              border: '2px solid #fbbf24',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fbbf24';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Otimizador de Roteiros</h3>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Ajuste seu script</p>
          </div>

          <div
            onClick={() => setTool('list')}
            style={{
              backgroundColor: '#1f2937',
              border: '2px solid #fbbf24',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fbbf24';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Organizador de Listas</h3>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Limpe e organize dados</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
