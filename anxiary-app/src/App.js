import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Secondpage from './components/Secondpage';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* keep the navbar outside of the switch so that it remains visible all throughout */}
      <Navbar />
      <Switch>
        <Route exact path='/homepage'>
          <Homepage />
        </Route>
        <Route exact path='/secondpage'>
          <Secondpage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
