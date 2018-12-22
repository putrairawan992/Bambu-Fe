import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Viewer from './components/viewer/Viewer';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Viewer} />
        <Route path="/:ticker" component={Viewer} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
