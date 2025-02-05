import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Rides from './Components/Rides';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Textform from './Components/Textform';
import Logs from './Components/Logs';
import BookState from './Context/BookState';

function App() {
  return (
    <div className="App">
      <Router>
        <BookState>
          <Navbar/>
          <Logs/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/ride' element={<Rides/>}/>
            <Route exact path='/textform' element={<Textform/>}/>
          </Routes>
        </BookState>
      </Router>
    </div>
  );
}

export default App;
