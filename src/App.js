import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MyRouter from './Routes/MyRouter/MyRouter';

function App() {
  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <MyRouter/>
    
    </BrowserRouter>
    </>
  );
}

export default App;
