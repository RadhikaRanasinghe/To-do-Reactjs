import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState , useEffect} from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, need to listen to the databse and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here.. gets triggered when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [input])

  const addTodo = (event) => {
    console.log('Its working!')
    event.preventDefault(); //will stop Refreshing

    db.collection('todos').add({
      todo: input,
      // saves a timestamp so it's consistent from all pcs and loaded from the time it got saved in the database
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput(''); //clear up the text box after submitting 
  }

  return (
    <div className="App">
      <h1>
        To-Do List
      </h1>
      <form>
        <FormControl>
          <InputLabel>Write your To-do</InputLabel>
          <Input value = {input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add To-Do
        </Button>
      </form>

    <ul>
      {todos.map(todo => (
        <Todo todo={todo}/>
      ))}
    </ul>
    </div>
  );
}

export default App;
