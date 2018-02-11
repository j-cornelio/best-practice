import React      from 'react';
import Home       from './HomePage';
import Lift       from './LiftState';
import Thinking   from './Thinking';
import Forms      from './Forms';
import HOC        from './HOCpage';


import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Link to='/'>Composition</Link>{' '} | {' '}
      <Link to='/lift'>Lift State</Link> | {' '}
      <Link to='/thinking'>Thinking</Link> | {' '}
      <Link to='/forms'>Forms</Link> | {' '}
      <Link to='/hoc'>HOC</Link> | {' '}

      <hr />
      <Route exact path='/'     component={Home} />
      <Route path='/lift'       component={Lift} />
      <Route path='/thinking'   component={Thinking} />
      <Route path='/forms'      component={Forms} />
      <Route path='/hoc'        component={HOC} />
    </div>
  </Router>
)

export default App;
