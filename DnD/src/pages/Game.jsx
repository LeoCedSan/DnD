import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../components/DraggableItem';


function Game() {
  
    const [list1, setList1] = useState(['Mas', 'Menos', 'Antouan']);
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
    console.log('Palabras seleccionadas anteriores:', {selections :[droppedItems.l1 , droppedItems.l2 , droppedItems.l3]} ),
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
            Con el tiempo, y
           comenzaron a pasar más tiempo juntos.
            Descubrieron que compartían una pasión por .
            Juntos exploraron los bosques cercanos, se perdieron en conversaciones interminables y se inspiraron mutuamente en sus respectivas artes.
            Su amor floreció como un jardín en primavera, lleno de colores vibrantes y fragancias dulces.
          </p>
          <button onClick={handleConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </DndProvider>  );
}

export default Game;
