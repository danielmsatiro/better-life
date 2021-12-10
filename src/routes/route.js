import { Redirect, Route as ReactDOMRoute } from "react-router";
import { useAuth } from "../providers/user";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  /*  a rota é privada e usuário não tá logado = login 
        rota privada usuário logado = ok
        rota não privada e usuário logado = não tá ok
        rota não privada e usuário não logado = ok
        
        true e true = ok
        true e false = login
        false e true = dashboard
        false e false = ok*/

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!user.token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        );
      }}
    />
  );
};
