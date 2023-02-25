export interface INavigationMenu {
    [index: string]: {
        mainNavigationElements: Array<INavigationItem>;
        additionalNavigationElements: Array<INavigationItem>;
    }
}

interface INavigationItem {
    id: number;
    iconName: string;
    title: string;
    routeName: string;
}