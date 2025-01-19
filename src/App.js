// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Rides from './Components/Rides';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/ride' element={<Rides/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
