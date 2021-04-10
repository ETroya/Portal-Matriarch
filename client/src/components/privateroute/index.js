import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {authContext} from "../../utils/GlobalState";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authData } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authData.isAuthenticated && !authData.loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PrivateRoute;