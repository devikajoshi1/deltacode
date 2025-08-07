import './App.css'
import { store } from './app/Store';
import Todo from './components/todo';
import {Provider} from 'react-redux'; 


function App() {


  return (
    <>
    <Provider store={store}>
        <Todo />
    </Provider>
    </>
  )
}

export default App
