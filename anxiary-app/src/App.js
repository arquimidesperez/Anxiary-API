import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = '/homepage'>
          <Homepage />
        </Route>
      </Switch>

      <p> Why can you see me?</p>
      
    </div>
  );
}

export default App;
