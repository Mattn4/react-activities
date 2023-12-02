import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// App.js is the starting point of my application
function App() {

  const navbarlinks = {"home": "/home.html", "services": "/services.html", "about": "/about.html", "contact": "/contact.html"} 

  //markup is returned to the caller or browser 
  return (
    <>
      <h1>Welcome to my site!!</h1>
      <Navbar navbarlinks={navbarlinks}></Navbar>
    </>
  );
}

export default App;
