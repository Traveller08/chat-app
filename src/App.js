import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/pages/Footer.js/Footer';
import Homepage from './components/pages/HomePage/Homepage';
import Chat from './components/pages/Chat/Chats';
import Create from './components/pages/Create/Create';
import Profile from './components/pages/Profile/Profile';
function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/direct/inbox' component={Chat}/>
          <Route path='/create'  component={Create}/>
          <Route path='/profile' exact component={Profile}/>
        </Switch>
        
    </Router>
  );
}

export default App;
