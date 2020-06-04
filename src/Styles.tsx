import styled from 'styled-components'


export const CenteredContainer = styled.div({
  maxWidth: '1200px',
  margin: '0 auto'
})

export const InputContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '50%'
})

export const InputLabel = styled.label({
  marginBottom: '1rem'
})

export const StyledInput = styled.input({
  padding: '.5rem'
})

export const Button = styled.button({
  color: '#fff',
  backgroundColor: '#457b9d',
  border: 0,
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '#ccc',
    color: '#000'
  }
})

export const CloseButton = styled.button({
  backgroundColor: 'none',
  border: '0'
})

export const TodoContainer = styled.div({
  margin: '1rem 0'
})

interface LabelProps {
  isDone: boolean
}

export const TodoLabel = styled.label<LabelProps>(({ isDone }) => ({
  textDecoration: isDone ? 'line-through' : 'inherit'
}))


