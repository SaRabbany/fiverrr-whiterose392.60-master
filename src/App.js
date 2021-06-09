import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MyRouter from './Routes/MyRouter/MyRouter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <MyRouter/>
    <Footer/>
    
    </BrowserRouter>
    </>
  );
}

export default App;
