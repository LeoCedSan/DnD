// StoryPage.js
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../DraggableItem';
import '../App.css';

const StoryPage = () => {
  const [list1, setList1] = useState(['Alejandro', 'Raimundo', 'Antouan']);
  const [list2, setList2] = useState(['Rocio', 'Lucia', 'Zafra']);
  const [list3, setList3] = useState(['Fotos', 'Pinturas', 'Prendas']);
  const [droppedItems, setDroppedItems] = useState({
    l1: location.state?.selections[0] || null,
    l2: location.state?.selections[1] || null,
    l3: location.state?.selections[2] || null,
  });

  const handleDrop = (targetListId, item) => {
    const newDroppedItems = { ...droppedItems };
    newDroppedItems[targetListId] = item;
    setDroppedItems(newDroppedItems);
  };

  const handleConfirm = () => {
    console.log('Palabras seleccionadas:', droppedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="Lists">
          <div className="List">
            <h2>Palabra 1</h2>
            {list1.map((item, index) => (
              <DraggableItem key={index} item={item} listId="l1" onDrop={handleDrop} />
            ))}
          </div>

          <div className="List">
            <h2>Palabra 2</h2>
            {list2.map((item, index) => (
              <DraggableItem key={index} item={item} listId="l2" onDrop={handleDrop} />
            ))}
          </div>

          <div className="List">
            <h2>Palabra 3</h2>
            {list3.map((item, index) => (
              <DraggableItem key={index} item={item} listId="l3" onDrop={handleDrop} />
            ))}
          </div>
        </div>

        <div className="Story">
          <h2>Historia Inventada</h2>
          <p style={{ margin: '0', lineHeight: '1.5', fontSize: '1.2em', textAlign: 'center' }}>
            Con el tiempo,  y
            {droppedItems.l2 !== null ? <span style={{ fontWeight: 'bold' }}>{droppedItems.l2}</span> : '___'} comenzaron a pasar más tiempo juntos.
            Descubrieron que compartían una pasión por {droppedItems.l3 !== null ? <span style={{ fontWeight: 'bold' }}>{droppedItems.l3}</span> : '___'}.
            Juntos exploraron los bosques cercanos, se perdieron en conversaciones interminables y se inspiraron mutuamente en sus respectivas artes.
            Su amor floreció como un jardín en primavera, lleno de colores vibrantes y fragancias dulces.
          </p>
          <button style={{ marginTop: '20px', padding: '10px', fontSize: '1em' }} onClick={handleConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default StoryPage;
