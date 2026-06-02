import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function TattooCalculator() {
  const [materials, setMaterials] = useState(0);
  const [drawingHours, setDrawingHours] = useState(0);
  const [executionHours, setExecutionHours] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(150);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const drawingCost = drawingHours * hourlyRate;
    const executionCost = executionHours * hourlyRate;
    const total = materials + drawingCost + executionCost;
    const suggestedPrice = Math.ceil(total * 1.3); // 30% de margem
    setResult(suggestedPrice);
  };

  const totalCost = materials + (drawingHours * hourlyRate) + (executionHours * hourlyRate);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        title="Calculadora de Valor de Tatuagem"
        subtitle="Calcule o preço justo para sua tatuagem"
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
              Custo de Materiais (R$)
            </label>
            <input
              type="number"
              value={materials}
              onChange={(e) => setMaterials(parseFloat(e.target.value) || 0)}
              placeholder="Ex: 50"
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Horas de Desenho
            </label>
            <input
              type="number"
              value={drawingHours}
              onChange={(e) => setDrawingHours(parseFloat(e.target.value) || 0)}
              placeholder="Ex: 2"
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Horas de Execução
            </label>
            <input
              type="number"
              value={executionHours}
              onChange={(e) => setExecutionHours(parseFloat(e.target.value) || 0)}
              placeholder="Ex: 3"
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Valor Hora (R$)
            </label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 0)}
              placeholder="Ex: 150"
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
            Calcular Preço
          </button>
        </div>

        {result && (
          <div style={{
            backgroundColor: '#1f2937',
            border: '2px solid #fbbf24',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Resultado</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Custo Total:</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>R$ {totalCost.toFixed(2)}</p>
            </div>

            <div style={{
              backgroundColor: '#000',
              border: '2px solid #fbbf24',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Preço Sugerido (com 30% de margem):</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
                R$ {result.toFixed(2)}
              </p>
            </div>

            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              Este é um preço justo que cobre seus custos e oferece uma margem de lucro saudável.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
