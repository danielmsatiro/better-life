import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import { SignUp } from "../pages/SignUp";

function Routes() {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
      <Route path="/">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default Routes;
