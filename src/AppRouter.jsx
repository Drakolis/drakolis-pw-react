import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InfoNew from './views/InfoNew';
import LiveStream from './views/LiveStream';

export default function AppRouter() {
  return (
    <Router>
      <Route exact path="/" render={() => <InfoNew />} />
      <Route exact path="/live" render={() => <LiveStream />} />
    </Router>
  );
}
