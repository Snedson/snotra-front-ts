import { TGoogleMaterialIcons } from "@/common/types/TGoogleMaterialIcons";

export interface INavigationMenu {
    [index: string]: {
        mainNavigationElements: Array<INavigationItem>;
        additionalNavigationElements: Array<INavigationItem>;
    }
}

interface INavigationItem {
    id: number;
    iconName: TGoogleMaterialIcons;
    title: string;
    routeName: string;
}