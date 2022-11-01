import React from 'react'
import './styles.css'

interface Props{
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}
const InputField = ( {todo, setTodo }: Props) => {
  return (
    <form className='input'>
        <input type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Add a todo...' className='input__box' />
        <button className='input_submit' type="submit">Add</button>

    </form>
  )
}

export default InputField