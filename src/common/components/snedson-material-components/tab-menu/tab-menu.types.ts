export interface ITabMenuProps {
    tabs: ITab[];
    selectedTabItemId: number,
    selectTabItemFunction: (tabId: number) => void,
}

interface ITab {
    id: number;
    title: string;
}