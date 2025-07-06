import React from 'react';
import './App.css'
import { Provider } from 'react-redux';
import {store} from './app/store'
import Todos from './components/Todos'
import AddTodo  from './components/AddTodo';


function App() {

  return (
    <>
   <Provider store={store}>
   <h1>Learn about redux Toolkit</h1>
   <AddTodo />
   <br></br>
   <Todos />
   </Provider>
   </>
  )
}

export default App
