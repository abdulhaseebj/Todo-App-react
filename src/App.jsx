import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  function addTodo(e) {
    e.preventDefault()
    console.log(text);
    // todo.push(text)
    setTodo([...todo, text]);
    console.log(todo);
    setText('')

  }
  function editTodo(index) {
    console.log('edit');
    const editPromt = prompt('Enter Updated text')
    const editTodos = [...todo]
    editTodos[index]= editPromt
    setTodo(editTodos)


  }

  function deleteTodo(index) {
    const deleteTodos = [...todo];
    deleteTodos.splice(index, 1);
    setTodo(deleteTodos);



  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter Title' onChange={(e) => setText(e.target.value)} value={text} className='input'/>
        <button type='submit'>Add todo</button><br />
      </form>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button></li>
        })}
      </ul>

    </>
  )
}

export default App
