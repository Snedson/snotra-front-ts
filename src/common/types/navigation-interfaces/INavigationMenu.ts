import { TGoogleMaterialIcons } from '@/common/components/helper-components/google-material-icon/google-material-icon.types';

export interface INavigationMenu {
    [index: string]: {
        mainNavigationElements: Array<INavigationItem>;
        additionalNavigationElements: Array<INavigationItem>;
    };
}

interface INavigationItem {
    id: number;
    iconName: TGoogleMaterialIcons;
    title: string;
    routeName: string;
}
