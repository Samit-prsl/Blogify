
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

function App() {
  const user = false;
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
        <Route path='/register' Component={user ? Home : Register}/>
        <Route path='/login' Component={user ? Home : Login}/>
        <Route path='/settings' Component={user ? Settings : Register}/>
        <Route path='/write' Component={user ? Write : Register}/>
        <Route path='/post/:postId' Component={Single}/>
      </Routes>
      {/* <Register/> */}
    
    </Router>
  );
}

export default App;
