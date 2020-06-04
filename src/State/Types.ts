import { StateActions } from "./Actions";
export interface Todo {
  id?: number;
  text: string;
  isDone: boolean;
}

export interface State {
  todos: Todo[];
  filter: FilterEnum;
}
export interface Action {
  type: string;
}

export enum FilterEnum {
  ALL = "ALL",
  DONE = "DONE",
  OPEN = "OPEN",
}

export interface Selectors {
  getState: () => State;
  getTodos: () => Todo[];
  getFilter: () => FilterEnum;
}

export interface Actions {
  addTodo: (todo: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  filterTodos: (filter: FilterEnum) => void;
}
// export interface TodoContext {
//   actions: any;
//   state: any;
//   dispatch: any;
//   selectors: any;
// }
export interface TodoContext {
  actions: Actions;
  state: State;
  dispatch: React.Dispatch<StateActions>;
  selectors: Selectors;
}
