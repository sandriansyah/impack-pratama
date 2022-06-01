import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListProduct from './pages/listProduct/listProduct';
import AddProduct from './pages/addProduct/addProduct'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/listProduct" element={<ListProduct/>} />
          <Route exact path="/addProduct" element={<AddProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
