import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])

  const addTodo = (event) => {
    console.log('Its working!')
    event.preventDefault(); //will stop Refreshing
    setTodos([...todos, input]);
    setInput(''); //clear up the text box after submitting 
  }

  return (
    <div className="App">
      <h1>
        Hello World
      </h1>
      <form>
        <FormControl>
          <InputLabel>Write your To-do</InputLabel>
          <Input value = {input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add To-Do
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add To-Do</button> */}
      </form>

    <ul>
      {todos.map(todo => (
        <Todo text={todo}/>
        // <li>{todo}</li>
      ))}
    </ul>
    </div>
  );
}

export default App;
