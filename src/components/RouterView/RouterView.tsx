import Loader from 'components/Loader';
import { useRoutes } from 'hooks/useRoutes';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { IRouterViewIProps } from './interfaces';

const RouterView: React.FC<IRouterViewIProps> = () => {
    const routes = useRoutes();

    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                {routes.map(({ path, component: Component }) => (
                    <Route key={path} path={path}>
                        <Component />
                    </Route>
                ))}
            </Switch>
        </Suspense>
    );
};

export default RouterView;
