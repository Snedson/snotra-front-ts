export interface IListSelectProps {
    menuItems: IListSelectMenuItem[];
    selectedTabItemId: number;
    isEmptySelectionAvaliable: boolean;
    title: string;
    isExpanded: boolean;
}

export type IListSelectMenuItemProps = IListSelectMenuItem & {
    isSelected: boolean
}

export interface IListSelectMenuItem {
    id: number;
    title: string;
}