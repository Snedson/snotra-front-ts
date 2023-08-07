import { TGoogleMaterialIcons } from '../../helper-components/google-material-icon/google-material-icon.types';
import { IButtonProps } from '../custom-button/custom-button.types';

export interface IMenuListProps {
    items: IMenuListItem[];
}

export interface IMenuListItem {
    icon: TGoogleMaterialIcons;
    title: string;
    content?: string;
    button?: IButtonProps;
}
