import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/pages/Footer.js/Footer';
import Homepage from './components/pages/HomePage/Homepage';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Homepage}/>
        </Switch>
        <Footer></Footer>
    </Router>
  );
}

export default App;
