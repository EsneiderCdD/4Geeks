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
        <div key={index}>
          <button onClick={() => toggleItem(index)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px', border: '1px solid #d2b48c', background: '#e6c3a6', cursor: 'pointer', color: '#5a3e2b', fontWeight: 'bold', borderRadius: '4px' }}>
            {item.title}
          </button>
          {activeIndexes.includes(index) && (
            <div style={{ padding: '10px', border: '1px solid #d2b48c', borderTop: 'none', background: '#faebd7', color: '#5a3e2b', borderRadius: '4px' }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const items = [ 
  { title: 'Terapia 1:1', content: 'Sesiones individuales personalizadas para el crecimiento personal. Costo $' },
  { title: 'Terapia grupal', content: 'Sesiones en grupo para compartir experiencias y apoyo mutuo. Costo $' }
];

export default function App() {
  return <Acordeon items={items} />;
}
