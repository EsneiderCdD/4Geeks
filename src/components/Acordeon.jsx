import { useState } from "react";

const Acordeon = ({ items = [] }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleItem = (index) => {
    setActiveIndexes((prev) => {
      const newIndexes = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : prev.length < 2
        ? [...prev, index]
        : prev;
      return newIndexes;
    });
  };

  return (
    <div style={{ background: '#f4e1d2', padding: '10px', borderRadius: '8px' }}>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: '8px' }}>
          <button
            onClick={() => toggleItem(index)}
            style={{
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              textAlign: 'left',
              padding: '10px',
              border: '1px solid #d2b48c',
              background: '#e6c3a6',
              cursor: 'pointer',
              color: '#5a3e2b',
              fontWeight: 'bold',
              borderRadius: '4px'
            }}
          >
            <span>{item.title}</span>
            <span 
              style={{
                fontSize: '36px',  // Aumentar mucho el tamaño de la flecha
                fontWeight: 'bold',
                color: '#5a3e2b',  // Color más visible
                transition: 'transform 0.3s',
                transform: activeIndexes.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              ▼
            </span>
          </button>
          {activeIndexes.includes(index) && (
            <div
              style={{
                padding: '10px',
                border: '1px solid #d2b48c',
                borderTop: 'none',
                background: '#faebd7',
                color: '#5a3e2b',
                borderRadius: '4px',
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const items = [
  { title: 'Terapia 1:1', content: 'La terapia psicotranspersonal individual es un enfoque terapéutico que integra la psicología tradicional con dimensiones espirituales y trascendentales del ser humano. A través del diálogo profundo, la exploración de la conciencia y diversas técnicas como la meditación, la respiración consciente y el trabajo con símbolos o arquetipos, busca ayudar a la persona a trascender bloqueos emocionales, comprender su propósito de vida y desarrollar una mayor conexión consigo misma y con el mundo. Se enfoca en la autotransformación, el crecimiento personal y la integración de experiencias que van más allá del ego, promoviendo el bienestar integral.' },
  { title: 'Terapia grupal', content: 'La terapia psicotranspersonal grupal crea un espacio de crecimiento y exploración colectiva, donde los participantes comparten sus experiencias y aprendizajes en un entorno de apoyo y conexión. A través de técnicas como la meditación, la respiración consciente, el trabajo con arquetipos y dinámicas grupales, se facilita la expansión de la conciencia y el autoconocimiento. La interacción con otros permite reflejar aspectos internos, fomentar la empatía y trascender bloqueos emocionales desde una perspectiva más amplia. Este enfoque impulsa la transformación personal y colectiva, promoviendo una mayor conexión con uno mismo, con los demás y con lo trascendental.' }
];

export default function App() {
  return <Acordeon items={items} />;
}


