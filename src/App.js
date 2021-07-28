import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages below
import Home from './Home/Home';
import Projects from './Projects/Projects';


//import Navbar here
import Navbar from './Navbar/Navbar';


const App = () => {
  return <Router>
      <Navbar/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
  </Router>;
};



export default App;
