import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import ModelDeal from "../../Pages/ModelDeal";
import FormikSandbox from "./../../Pages/FormikSandbox/index";

const Routing = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/model" component={ModelDeal} />
      <Route exact path="/formik" component={FormikSandbox} />
    </Switch>
  </Router>
);

export default Routing;
