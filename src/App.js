import {BrowserRouter as Router ,Route ,Link, Switch} from 'react-router-dom'
import './App.css';
import Protected from './Components/Dashboard/Protected';
import Login from './Components/Login/Login';
import AddProducts from './Components/Products/AddProducts';
import ProductsList from './Components/Products/ProductsList';
import Register from './Components/Register/Register';
import Home from './Home';
function App() {
  return (
    <div className="App">
         <Router>
           <Switch>
           <Route exact path="/">
            <Home>
            </Home>
           </Route>
           <Route  path="/viewProducts">
           <Protected comp={ProductsList}/>
           </Route>
           <Route path="/register">
            <Register>
            </Register>
           </Route>
           <Route path="/login">
            <Login>
            </Login>
           </Route>
           <Route  path="/addProducts">
           <Protected comp={AddProducts}/>
           </Route>
           </Switch>
         </Router>
    </div>
  );
}

export default App;
