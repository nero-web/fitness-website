import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Volume from './pages/Blogsdetails/Volume';
import Energie from './pages/Blogsdetails/Energie';
import CalBurn from './pages/Blogsdetails/CalBurn';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Router basename='/fitness-website'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/volume' element={<Volume/>}/>
          <Route path='/blog/energie' element={<Energie/>}/>
          <Route path='/blog/calburn' element={<CalBurn/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path="*" element={<Home to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
