import './App.css';
import Title from './MyTitle.jsx';
import ProductTab from "./ProductTab.jsx";
import MsgBox from './MsgBox.jsx';

function App() {
  return (
    <>
      <MsgBox userName="devika" textColor="pink"/>
      <ProductTab/>
    </>
  );
}

export default App
