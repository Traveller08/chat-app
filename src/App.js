import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './components/pages/Chat/Chats';
import Create from './components/pages/Create/Create';
import Profile from './components/pages/Profile/Profile';
import { AuthProvider } from './context/AuthContext';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'
function App() {
  return (
    
    <Router>

      <AuthProvider>

        <Switch>
          <PrivateRoute path='/home' exact component={Dashboard}/>
          <PrivateRoute path='/direct/inbox' component={Chat}/>
          <PrivateRoute path='/create'  component={Create}/>
          <PrivateRoute path='/profile'  exact component={Profile}/>
          
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
         
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/forgot-password" component={ForgotPassword}></Route>
          
        </Switch>
      </AuthProvider>
      
    </Router>
   
  );
}

export default App;
