export interface IRoute {
    path: string;
    name: string;
    component:
        | React.FC<any>
        | React.ComponentClass
        | React.LazyExoticComponent<any>;
}
