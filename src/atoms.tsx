import { atom } from "recoil";

interface IToDoState {
  [key: string]: IToDo[];
}
export interface IToDo {
  id: number;
  text: string;
}
export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: [
      { id: 1, text: "1" },
      { id: 2, text: "2" },
    ],
    doing: [],
    done: [],
  },
});
