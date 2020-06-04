import React, { useContext, useState } from 'react';
import ReactJson from 'react-json-view'
import Context from './State/Context'
import { CenteredContainer, InputContainer, InputLabel, StyledInput, Button, TodoLabel, TodoContainer, CloseButton } from './Styles'
import { Todo, FilterEnum } from './State/Types'
import './App.css';

function App() {
  const { selectors: { getState, getTodos, getFilter }, actions: { addTodo, toggleTodo, filterTodos } } = useContext(Context)
  const [todoValue, setTodoValue] = useState('')

  const getFilteredTodos = (): Todo[] => {
    const todos = getTodos() as Todo[]
    switch (getFilter()) {
      case 'OPEN':
        return todos.filter(todo => !todo.isDone)
      case 'DONE':
        return todos.filter(todo => todo.isDone)
      default:
        return todos
    }
  }

  const todos = getFilteredTodos()

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    setTodoValue(value)
  }
  const handleSubmit = () => {
    addTodo(todoValue)
    setTodoValue('')
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    toggleTodo(Number.parseInt(value, 10))
  }

  const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    // const { target: { value } } = e
    filterTodos(value as FilterEnum)
  }

  const getFilterTypes = () => {
    let types: React.ReactNode[] = []
    for (let key in FilterEnum) {
      types = types.concat(
        <label>
          <input type="radio" name="filter" value={key} checked={getFilter() === key} onChange={handleRadioChange} />
          {key}
        </label>
      )
    }
    return types
  }


  return (
    <CenteredContainer>
      <h1>Demo</h1>
      <form>
        <InputContainer>
          <InputLabel htmlFor="todo">Todo label</InputLabel>
          <StyledInput value={todoValue} name="todo" key="todo" onChange={handleTextChange} />
          <Button role="button" type="button" disabled={todoValue.length === 0} onClick={handleSubmit}>Add</Button>
        </InputContainer>
      </form>
      <div>
        <h2>Filters</h2>
        <form>
          {getFilterTypes()}
        </form>
      </div>
      <TodoContainer>
        <h2>Todos </h2>
        {todos.map(todo => (
          <div key={todo.id}>
            <TodoLabel isDone={todo.isDone} htmlFor={`todo-${todo.id}`}>
              <input type="checkbox" name={`todo-${todo.id}`} id={`todo-${todo.id}`} checked={todo.isDone} value={todo.id} onChange={handleChange} />
              {todo.text}
              <CloseButton type="button">X</CloseButton>
            </TodoLabel>
          </div>
        ))}
      </TodoContainer>
      <ReactJson src={getState()} />
    </CenteredContainer>
  );
}

export default App;
