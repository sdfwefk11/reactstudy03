import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}
export interface IToDo {
  id: number;
  text: string;
}
export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: [],
    doing: [],
    done: [],
  },
});
