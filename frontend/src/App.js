
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Write from './Pages/Write';
import Single from './Pages/Single';
import Home from './Pages/Home';
import { useContext } from 'react';
import { Context } from './Context/Context';

function App() {
  const {User} = useContext(Context)
  return (
    <Router>
    
    
      <Navbar/>
      {/* <Home/> */}
      {/* <Single/> */}
      {/* <Write/> */}
      {/* <Settings/> */}
      {/* <Login/> */}
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/register' Component={User ? Home : Register}/>
        <Route path='/login' Component={User ? Home : Login}/>
        <Route path='/settings' Component={User ? Settings : Register}/>
        <Route path='/write' Component={User ? Write : Register}/>
        <Route path='/post/:postId' Component={Single}/>
      </Routes>
      {/* <Register/> */}
    
    </Router>
  );
}

export default App;
