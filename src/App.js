import './App.css';
import {Routes ,Route} from "react-router-dom"
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import About from './Componets/About';
import Contact from './Componets/Contact';
import Login from './Componets/Login';
import "./nav.css"
import User from './Componets/User';
import UsersDetail from './Componets/UsersDetail';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path="/user/:id" element={<UsersDetail/>}></Route>

    </Routes>
    </>
  );
}

export default App;
