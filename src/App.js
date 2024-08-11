
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About';


function App() {
  return (
    <>
    

   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main></Main>}></Route>
      <Route path='/about' element={<About/>}>

      </Route>
    </Routes>
    </BrowserRouter>
   

    </>
  );
}

export default App;
