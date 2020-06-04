import { FilterEnum, State } from "./Types";
import { StateActions } from "./Actions";

export const initialState: State = {
  todos: [],
  filter: FilterEnum.ALL,
};

export const reducer = (state = initialState, action: StateActions): State => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: state.todos.concat({
          id: Math.floor(Math.random() * 100_000),
          text: action.todo,
          isDone: false,
        }),
      };
    // case "REMOVE":
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => {
    //       if (todo.id) {
    //         return !todo.id === action.id
    //       }
    //       return true
    //     }))
    //   };
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        }),
      };
    case "FILTER":
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};
