
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {CreatePost} from "./pages/CreatePost";
import { useState } from 'react';
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config";
import {Footer} from "./Footer";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

 

  const signUserOut = () => {
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false)
      window.location.pathname = "/login" 
    })
  }
  return (
    <div className="App">
     <Router>
      <nav className='navbar'>
        <Link className='navbar__link' to="/">Home</Link>
       {!isAuth ? <Link className='navbar__link' to="/login">Log In</Link> 
       : (
        <>
        <Link className='navbar__link' to="/createpost">Create Post</Link>
       <button className='navbar__logout__btn' onClick={signUserOut}>Log Out</button>
       </>
       )}
      </nav>
       <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
       </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
