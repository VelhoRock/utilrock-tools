import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function HoursConverter() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(150);
  const [result, setResult] = useState<{ decimal: number; cost: number } | null>(null);

  const calculate = () => {
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    const decimalHours = totalSeconds / 3600;
    const cost = decimalHours * hourlyRate;
    setResult({ decimal: decimalHours, cost });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        title="Conversor de Horas/Decimal"
        subtitle="Converta tempo em decimal e calcule o valor a cobrar"
      />

      <main className="container" style={{ flex: 1, paddingBottom: '2rem' }}>
        <div style={{
          backgroundColor: '#1f2937',
          border: '2px solid #fbbf24',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Horas
              </label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value) || 0)}
                placeholder="0"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Minutos
              </label>
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
                placeholder="0"
                min="0"
                max="59"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Segundos
              </label>
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
                placeholder="0"
                min="0"
                max="59"
                style={{ width: '100%' }}
              />
            </div>
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
            Converter
          </button>
        </div>

        {result && (
          <div style={{
            backgroundColor: '#1f2937',
            border: '2px solid #fbbf24',
            padding: '2rem'
          }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '1.5rem' }}>Resultado</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Tempo em Decimal:</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>
                {result.decimal.toFixed(4)} horas
              </p>
            </div>

            <div style={{
              backgroundColor: '#000',
              border: '2px solid #fbbf24',
              padding: '1.5rem'
            }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Valor a Cobrar:</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
                R$ {result.cost.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
