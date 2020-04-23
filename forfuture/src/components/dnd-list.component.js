import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import DragHandle from '../icons/drag-handle.svg';

const initial = (items) => {
    return items.map(item => {
        const custom = {
          id: `id-${item}`,
          content: item
        };
        return custom;
    })
};
  
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  
  function Item({ item, index }) {
    return (
      <Draggable draggableId={item.id} index={index}>
        {provided => (
          <div className="draggable-item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <img src={DragHandle}/>
            {item.content}
          </div>
        )}
      </Draggable>
    );
  }
  
  const ItemList = React.memo(function ItemList({ items }) {
    return items.map((item, index) => (
      <Item item={item} index={index} key={item.id} />
    ));
  });

function DndListComponent({items, onChange}) {

    const [state, setState] = useState({ items: initial(items) });

    function onDragEnd(result) {
      if (!result.destination) {
        return;
      }
  
      if (result.destination.index === result.source.index) {
        return;
      }
  
      const items = reorder(
        state.items,
        result.source.index,
        result.destination.index
      );
  
      setState({ items });
      if (onChange != null) {
        const newlist = items.map((item) => {
            return item.content;
        })
        onChange({items: newlist});
      }
    }
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div className="draggable-list" ref={provided.innerRef} {...provided.droppableProps}>
              <ItemList items={state.items} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
}

export default DndListComponent;