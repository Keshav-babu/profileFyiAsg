import './App.css';
import Header from './component/Header';
import Cart from './container/Cart';
import Products from './container/products';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>




  );
}

export default App;
