import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateProps extends RouteProps {
  component: ComponentType;
}

export const PrivateRoute: React.FC<PrivateProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location }) =>
      localStorage.getItem('GithubUser') ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      )
    }
  />
);
