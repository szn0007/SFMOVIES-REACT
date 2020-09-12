import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import MovieDetails from './components/MovieDetails'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" component={LandingPage} exact></Route>
        <Route path="/movie/:title" component={MovieDetails} exact></Route>
      </div>
    </Router>
  );
}

export default App;
