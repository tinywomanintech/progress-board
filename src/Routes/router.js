import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProgressBoard from '../pages/ProgressBoard';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ProgressBoard />
        </Route>
      </Switch>
    </Router>
  );
}
