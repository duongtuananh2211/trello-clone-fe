import { IRoute } from 'interfaces';
import React from 'react';

export const RouteContext = React.createContext<IRoute[]>([]);

export const RouteContextProvider: React.FC<{ routes: IRoute[] }> = ({
    routes,
    children
}) => {
    return (
        <RouteContext.Provider value={routes}>{children}</RouteContext.Provider>
    );
};
