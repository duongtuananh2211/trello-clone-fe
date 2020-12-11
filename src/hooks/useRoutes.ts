import { RouteContext } from 'contexts';
import { IRoute } from 'interfaces';
import { useContext } from 'react';

export function useRoutes(): IRoute[] {
    return useContext(RouteContext);
}
