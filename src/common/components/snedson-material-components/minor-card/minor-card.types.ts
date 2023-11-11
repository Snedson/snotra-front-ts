import { TGoogleMaterialIcons } from '../../helper-components/google-material-icon/google-material-icon.types';

export type IMinorCardProps =
    | IMinorCardToExternalUrlProps
    | IMinorCardToInternalUrlProps;

interface IMinorCardPropsBase {
    title?: string;
    icon?: TGoogleMaterialIcons;
    description?: string;
}

interface IMinorCardToExternalUrlProps extends IMinorCardPropsBase {
    href: string;
    to?: never;
}

interface IMinorCardToInternalUrlProps extends IMinorCardPropsBase {
    href?: never;
    to: string;
}
