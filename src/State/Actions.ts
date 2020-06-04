import { State, Action, FilterEnum } from "./Types";

class AddTodoAction implements Action {
  readonly type = "ADD";
  constructor(public todo: string) {}
}
class RemoveTodoAction implements Action {
  readonly type = "REMOVE";
  constructor(public id: number) {}
}

class FilterAction implements Action {
  readonly type = "FILTER";
  constructor(public filter: FilterEnum) {}
}

class ToggleAction implements Action {
  readonly type = "TOGGLE";
  constructor(public id: number) {}
}

const getActions = (state: State, dispatch: React.Dispatch<StateActions>) => {
  const addTodo = (todo: string): void => dispatch(new AddTodoAction(todo));
  const removeTodo = (id: number): void => dispatch(new RemoveTodoAction(id));
  const toggleTodo = (id: number): void => dispatch(new ToggleAction(id));
  const filterTodos = (filter: FilterEnum): void =>
    dispatch(new FilterAction(filter));
  return {
    addTodo,
    removeTodo,
    toggleTodo,
    filterTodos,
  };
};

export default getActions;

export type StateActions =
  | AddTodoAction
  | RemoveTodoAction
  | FilterAction
  | ToggleAction;
