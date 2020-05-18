import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ButtonModule from './modules/button'
import ButtonGroupModule from './modules/button-group';
import CheckBoxModule from './modules/checkbox';
import RadioModule from './modules/radio';
// import InputModule from './modules/input';
import LoadingDotModule from './modules/loading/dot';
import LoadingBarModule from './modules/loading/bar';
import LoadingCircleModule from './modules/loading/circle'
import IconModule from './modules/icon'

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
        {/* <li><Link to="/InputModule">InputModule</Link></li> */}
        <li><Link to="/LoadingDotModule">LoadingDotModule</Link></li>
        <li><Link to="/LoadingBarModule">LoadingBarModule</Link></li>
        <li><Link to="/LoadingCircleModule">LoadingCircleModule</Link></li>
        <li><Link to="/IconModule">IconModule</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/ButtonModule" component={ButtonModule} />
      <Route path="/ButtonGroupModule" component={ButtonGroupModule} />
      <Route path="/CheckBoxModule" component={CheckBoxModule} />
      <Route path="/RadioModule" component={RadioModule} />
      {/* <Route path="/InputModule" component={InputModule} /> */}
      <Route path="/LoadingDotModule" component={LoadingDotModule} />
      <Route path="/LoadingBarModule" component={LoadingBarModule} />
      <Route path="/LoadingCircleModule" component={LoadingCircleModule} />
      <Route path="/IconModule" component={IconModule} />
    </div>
  </Router>
)


export default App;
