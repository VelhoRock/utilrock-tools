import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const defaultItems = [
  'Documentos (RG, CPF, Passaporte)',
  'Cartão de Crédito/Débito',
  'Dinheiro',
  'Celular e Carregador',
  'Roupas (7 dias)',
  'Sapatos',
  'Meias e Cuecas',
  'Sutiã',
  'Pijama',
  'Casaco/Jaqueta',
  'Cinto',
  'Óculos de Sol',
  'Chapéu/Boné',
  'Escova de Dentes',
  'Pasta de Dente',
  'Sabonete',
  'Shampoo',
  'Condicionador',
  'Desodorante',
  'Escova de Cabelo',
  'Toalha de Rosto',
  'Toalha de Corpo',
  'Medicamentos Pessoais',
  'Protetor Solar',
  'Repelente',
  'Livro/Tablet',
  'Fone de Ouvido',
  'Câmera',
];

export function TravelChecklist() {
  const [items, setItems] = useState(defaultItems.map(item => ({ name: item, checked: false })));
  const [newItem, setNewItem] = useState('');

  const toggleItem = (index: number) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { name: newItem, checked: false }]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const checkedCount = items.filter(i => i.checked).length;
  const progress = Math.round((checkedCount / items.length) * 100);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        title="Checklist de Viagem"
        subtitle="Organize sua mala sem deixar nada para trás"
      />

      <main className="container" style={{ flex: 1, paddingBottom: '2rem' }}>
        {/* Progresso */}
        <div style={{
          backgroundColor: '#1f2937',
          border: '2px solid #fbbf24',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Progresso</span>
              <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{checkedCount}/{items.length}</span>
            </div>
            <div style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#000',
              border: '2px solid #fbbf24',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#fbbf24',
                transition: 'width 0.3s'
              }} />
            </div>
          </div>
          <p style={{ textAlign: 'center', color: '#9ca3af' }}>{progress}% completo</p>
        </div>

        {/* Adicionar item */}
        <div style={{
          backgroundColor: '#1f2937',
          border: '2px solid #fbbf24',
          padding: '1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          gap: '1rem'
        }}>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            placeholder="Adicionar item..."
            style={{ flex: 1 }}
          />
          <button onClick={addItem}>Adicionar</button>
        </div>

        {/* Lista */}
        <div style={{
          backgroundColor: '#1f2937',
          border: '2px solid #fbbf24',
          padding: '1.5rem'
        }}>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: item.checked ? 'rgba(251, 191, 36, 0.1)' : '#000',
                  border: '1px solid #fbbf24',
                  textDecoration: item.checked ? 'line-through' : 'none',
                  opacity: item.checked ? 0.6 : 1
                }}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItem(idx)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <span style={{ flex: 1 }}>{item.name}</span>
                <button
                  onClick={() => removeItem(idx)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#9ca3af',
                    border: '1px solid #9ca3af',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.875rem'
                  }}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
