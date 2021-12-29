import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import Default from '../pages/_layouts/Default';

interface RouterProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouterProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <Default>
            <Component />
          </Default>
        );
      }}
    />
  );
};

export default Route;
