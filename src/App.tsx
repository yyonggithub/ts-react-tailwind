import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ButtonModule from './modules/button'
import ButtonGroupModule from './modules/button-group';
import CheckBoxModule from './modules/checkbox';
import RadioModule from './modules/radio';

const Home: React.SFC = () => {
  return (<div>Home</div>)
}

const App: React.SFC = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ButtonModule">ButtonModule</Link></li>
        <li><Link to="/ButtonGroupModule">ButtonGroupModule</Link></li>
        <li><Link to="/CheckBoxModule">CheckBoxModule</Link></li>
        <li><Link to="/RadioModule">RadioModule</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/ButtonModule" component={ButtonModule} />
      <Route path="/ButtonGroupModule" component={ButtonGroupModule} />
      <Route path="/CheckBoxModule" component={CheckBoxModule} />
      <Route path="/RadioModule" component={RadioModule} />
    </div>
  </Router>
)


export default App;
