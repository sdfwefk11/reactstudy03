import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
function Dnd() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="01">
          {() => (
            <ul>
              <Draggable draggableId="001" index={0}>
                {() => <li>01</li>}
              </Draggable>
              <Draggable draggableId="002" index={1}>
                {() => <li>02</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
export default Dnd;
