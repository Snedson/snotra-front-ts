export interface ITabMenuProps {
    tabs: ITab[];
    selectedTabItemId: number;
}

interface ITab {
    id: number;
    title: string;
}
