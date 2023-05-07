import './App.css';
import { Login } from './components/login';
import { Signup } from './components/signup';
import { AuthenticationProvider } from './utils/Authentication';
import { Route,Routes } from 'react-router-dom';
import {  Profile } from './components/profile';
import { Admin } from './components/adminmod/admin';
import RequiredAuth from './utils/RequiredAuth';
import { AddPlane } from './components/adminmod/addPlane';
import { GetAeroplanes } from './components/getAeroplane';
import { Showplanes } from './components/adminmod/showplane';
import { Book } from './components/book';
import { NavBar } from './components/NavBar';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <NavBar/>
        <Routes>
          <Route exact path='/getplane' element={<RequiredAuth><GetAeroplanes/></RequiredAuth>}></Route>
          <Route  path='/booking' element={<RequiredAuth><Book/></RequiredAuth>}/>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route  path='admin' element={<Admin/>}>
          <Route path='addplane' element={<AddPlane/>}></Route>
          <Route path='showplane' element={<Showplanes/>}></Route>
          </Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
