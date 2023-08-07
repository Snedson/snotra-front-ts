export type IListSelectProps =
    | IListSelectPropsWithDefaultSelection
    | IListSelectPropsWithoutDefaultSelection;

interface IListSelectPropsWithDefaultSelection {
    menuItems: IListSelectMenuItem[];
    selectedItemId: number | null;
    isDefaultSelectionAvaliable: true;
    defaultSelectionTitle: string;
    title: string;
}

interface IListSelectPropsWithoutDefaultSelection {
    menuItems: IListSelectMenuItem[];
    selectedItemId: number;
    isDefaultSelectionAvaliable: false;
    defaultSelectionTitle?: never;
    title: string;
}

export type IListSelectMenuItemProps = IListSelectMenuItem & {
    isSelected: boolean;
};

export interface IListSelectMenuItem {
    id: number;
    title: string;
}
