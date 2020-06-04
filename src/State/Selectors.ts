import { State, Todo, FilterEnum, Selectors } from "./Types";

const getSelectors = (state: State): Selectors => {
  const getState = (): State => state;
  const getTodos = (): Todo[] => state.todos;
  const getFilter = (): FilterEnum => state.filter;
  return {
    getState,
    getTodos,
    getFilter,
  };
};

export default getSelectors;
