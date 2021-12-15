import Group from "../pages/Group";
import { Switch } from "react-router";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import { SignUp } from "../pages/SignUp";
import SingIn from "../pages/SingIn";

import { Route } from "./route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/groups" component={Groups} isPrivate />
      <Route path="/group/:id" component={Group} isPrivate />
    </Switch>
  );
};
