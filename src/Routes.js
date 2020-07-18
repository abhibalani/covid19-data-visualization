import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
// import NotFound from "./containers/NotFound";


const AppliedRoute = ({ component: C, props: cProps, ...rest }) =>
	<Route {...rest} render={props => <C {...props} {...cProps} />} />;


export default ({ childProps }) =>
<Router>
  <Switch>
    <AppliedRoute path="/" component={Home} props={childProps} />
    {/* <AppliedRoute component={NotFound} /> */}
  </Switch>
  </Router>
  ;
