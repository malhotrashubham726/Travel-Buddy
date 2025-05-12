import './App.css';
import Home from './Components/Home';
import Login1 from './Components/Login1';
import Rides from './Components/Rides';
import SignUp from './Components/Signup1';
import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Textform from './Components/Textform';
import Logs from './Components/Logs';
import BookState from './Context/BookState';
import Pokemon from './Components/Pokemon';
import Navbar1 from './Components/Navbar1';

function App() {
  return (
    <div className="App">
      <Router>
        <BookState>
          <Navbar1/>
          <Logs/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login1/>}/>
            <Route exact path='/ride' element={<Rides/>}/>
            <Route exact path='/textform' element={<Textform/>}/>
            <Route exact path='/pk' element={<Pokemon/>}/>
          </Routes>
        </BookState>
      </Router>
    </div>
  );
}

export default App;
