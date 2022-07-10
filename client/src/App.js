import './App.css';
import {Fragment} from 'react';
import InputTodo from './components/inputTodo';
import ListTodos from './components/ListTodos';
import EditTodo from './components/editTodo';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
