import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const recipes = {
  salty: [
    { name: 'Omelete Rápida', ingredients: ['ovos', 'sal', 'manteiga'], time: '10 min' },
    { name: 'Arroz e Feijão', ingredients: ['arroz', 'feijão', 'sal', 'cebola'], time: '30 min' },
    { name: 'Macarrão ao Alho e Óleo', ingredients: ['macarrão', 'alho', 'óleo'], time: '15 min' },
    { name: 'Sopa de Legumes', ingredients: ['água', 'legumes', 'sal', 'caldo'], time: '25 min' },
  ],
  sweet: [
    { name: 'Pudim de Leite Condensado', ingredients: ['leite condensado', 'leite', 'ovos'], time: '20 min' },
    { name: 'Bolo de Chocolate Rápido', ingredients: ['farinha', 'chocolate', 'ovos', 'açúcar'], time: '40 min' },
    { name: 'Pavê', ingredients: ['biscoito', 'leite condensado', 'chocolate'], time: '15 min' },
    { name: 'Sorvete Caseiro', ingredients: ['leite', 'açúcar', 'frutas'], time: '30 min' },
  ]
};

export function KitchenSurvival() {
  const [type, setType] = useState<'salty' | 'sweet'>('salty');
  const [selectedRecipe, setSelectedRecipe] = useState<typeof recipes.salty[0] | null>(null);

  const currentRecipes = recipes[type];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        title="Cozinha de Sobrevivência"
        subtitle="Receitas práticas quando você está com fome"
      />

      <main className="container" style={{ flex: 1, paddingBottom: '2rem' }}>
        <div style={{
          backgroundColor: '#1f2937',
          border: '2px solid #fbbf24',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold' }}>
              Escolha o tipo:
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => { setType('salty'); setSelectedRecipe(null); }}
                style={{
                  flex: 1,
                  backgroundColor: type === 'salty' ? '#fbbf24' : '#1f2937',
                  color: type === 'salty' ? '#000' : '#fbbf24',
                  border: '2px solid #fbbf24'
                }}
              >
                Salgado
              </button>
              <button
                onClick={() => { setType('sweet'); setSelectedRecipe(null); }}
                style={{
                  flex: 1,
                  backgroundColor: type === 'sweet' ? '#fbbf24' : '#1f2937',
                  color: type === 'sweet' ? '#000' : '#fbbf24',
                  border: '2px solid #fbbf24'
                }}
              >
                Doce
              </button>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {currentRecipes.map((recipe, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedRecipe(recipe)}
              style={{
                backgroundColor: selectedRecipe === recipe ? '#fbbf24' : '#1f2937',
                border: '2px solid #fbbf24',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                color: selectedRecipe === recipe ? '#000' : '#fff'
              }}
            >
              <h3 style={{ marginBottom: '0.5rem' }}>{recipe.name}</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>⏱️ {recipe.time}</p>
            </div>
          ))}
        </div>

        {selectedRecipe && (
          <div style={{
            backgroundColor: '#1f2937',
            border: '2px solid #fbbf24',
            padding: '2rem'
          }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '1.5rem' }}>{selectedRecipe.name}</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Ingredientes:</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {selectedRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              backgroundColor: '#000',
              border: '2px solid #fbbf24',
              padding: '1rem',
              textAlign: 'center'
            }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Tempo de Preparo:</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
                {selectedRecipe.time}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
