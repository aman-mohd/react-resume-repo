import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages below
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Cards from "./Projects/Tour/Cards"


//import Navbar here
import Navbar from './Navbar/Navbar';


const App = () => {
  return <Router>
      <Navbar/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route path="/projects/Tour">
        <Cards />
      </Route>
  </Router>;
};



export default App;
