
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCategory category="men"/>}/>
    <Route path='/women' element={<ShopCategory category="women"/>}/>
    <Route path='/kids' element={<ShopCategory category="kid"/>}/>
    <Route path='/products' element={<Product/>}>
    <Route path=':productId' element={<Product/>}></Route>
    </Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/login' element={<LoginSignup/>}></Route>
       

    </Routes>
    
    </BrowserRouter>
     
    </div>
  );
}

export default App;
