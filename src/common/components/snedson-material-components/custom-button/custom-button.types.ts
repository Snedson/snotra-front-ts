import { TGoogleMaterialIcons } from "@/common/types/TGoogleMaterialIcons";
export type IButtonProps = IFullSizeButtonProps | IIconOnlySizeButtonProps;

interface IFullSizeButtonProps {
    size: TFullSize;
    type: TButtonType;
    innerText: string;
    iconName: TGoogleMaterialIcons;
}

interface IIconOnlySizeButtonProps {
    size: TIconOnlySize;
    type: TButtonType;
    iconName: TGoogleMaterialIcons;
}

export type TButtonSize = TFullSize | TIconOnlySize;

export type TFullSize = 'full';

export type TIconOnlySize = 'icon-only-large' | 'icon-only-small';

type TButtonType =
    | 'filled'
    | 'tonal'
    | 'outlined-transparent'
    | 'outlined'
    | 'text';