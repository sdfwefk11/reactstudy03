import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 3px;
  width: 300px;
  padding-top: 10px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;
const Area = styled.div<IAreaProps>`
  padding: 20px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;
const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}
interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
interface IForm {
  toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data);
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapShot) => (
          <Area
            isDraggingOver={snapShot.isDraggingOver}
            isDraggingFromThis={Boolean(snapShot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} toDo={toDo} index={index} />
            ))}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
