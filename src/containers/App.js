import React        from 'react';
import Home         from './HomePage';
import Lift         from './LiftState';
import Thinking     from './Thinking';
import Forms        from './FormPage';
import HOC          from './HOCpage';
import RenderProps  from './RenderPropPage';
import Compound         from './CompoundPage';
import Context          from './ContextPage';
import Pure             from './PureComponentPage';
import Communication    from './CommunicationPage';
import Features    from './16FeaturesPage';

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
      <Link to='/render'>Render Props</Link> | {' '}
      <Link to='/compound'>Compound</Link> | {' '}
      <Link to='/context'>Context</Link> | {' '}
      <Link to='/pure'>Pure</Link> | {' '}
      <Link to='/communication'>Communication</Link> | {' '}
      <Link to='/features'>Features</Link> | {' '}

      <hr />
      <Route exact path='/'     component={Home} />
      <Route path='/lift'       component={Lift} />
      <Route path='/thinking'   component={Thinking} />
      <Route path='/forms'      component={Forms} />
      <Route path='/hoc'        component={HOC} />
      <Route path='/render'     component={RenderProps} />
      <Route path='/compound'   component={Compound} />
      <Route path='/context'    component={Context} />
      <Route path='/pure'           component={Pure} />
      <Route path='/communication'  component={Communication} />
      <Route path='/features'  component={Features} />
    </div>
  </Router>
)

export default App;
