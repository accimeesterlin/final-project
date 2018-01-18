import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Login from './pages/Login';
import Coins from './pages/Coins';


const App = () => (
  <Router>
    <div>
      <Nav />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/coins" component={Coins}/>
      </Wrapper>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
