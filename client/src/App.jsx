import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Navigation';
import Cart from './Pages/Cart';
import PlaceOrder from './Pages/PlaceOrder';
function App() {
  return (
    <>
    <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOrder />} />
    </Routes>
    </>
  )
}

export default App
