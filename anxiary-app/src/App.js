import { Route, Switch } from 'react-router-dom';
// import './App.css';
import NewEntry from './components/NewEntry';
import Navbar from './components/Navbar';
import Secondpage from './components/Secondpage';
import Footer from './components/Footer'
import Landingpage from './components/Landingpage'
import PastEntries from './components/PastEntries';

function App() {
  return (
    <div className="App">
      {/* keep the navbar outside of the switch so that it remains visible all throughout */}
      <Navbar />
      <Switch>
      <Route exact path='/'>
          <Landingpage />
        </Route>
        <Route exact path='/newentry'>
          <NewEntry />
        </Route>
        <Route exact path='/pastentry'>
          <PastEntries />
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
