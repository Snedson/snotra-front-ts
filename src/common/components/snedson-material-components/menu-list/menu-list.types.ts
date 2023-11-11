import { TGoogleMaterialIcons } from '../../helper-components/google-material-icon/google-material-icon.types';
import { IButtonProps } from '../custom-button/custom-button.types';

export interface IMenuListProps {
    items: TMenuListItem[];
}

export type TMenuListItem =
    | IMenuListItemWithButton
    | IMenuListItemWithoutButton;

interface IMenuListItemWithButton {
    icon: TGoogleMaterialIcons;
    title: string;
    content?: string;
    button: IButtonProps;
    buttonCallback: Function;
}

interface IMenuListItemWithoutButton {
    icon: TGoogleMaterialIcons;
    title: string;
    content?: string;
    button?: null;
    buttonCallback?: never;
}
