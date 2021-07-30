import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import ModelDeal from "../../Pages/ModelDeal";

const Routing = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/model" component={ModelDeal} />
    </Switch>
  </Router>
);

export default Routing;
