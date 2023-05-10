import { TGoogleMaterialIcons } from "@/common/types/TGoogleMaterialIcons";
import { TSnotraColorSchemes } from "@/common/types/TSnotraColorSchemes";
export type IButtonProps = IFullSizeButtonProps | IIconOnlySizeButtonProps;

interface IFullSizeButtonProps {
    size: TFullSize;
    type: TButtonType;
    colorScheme?: TSnotraColorSchemes;
    innerText: string;
    iconName: TGoogleMaterialIcons;
}

interface IIconOnlySizeButtonProps {
    size: TIconOnlySize;
    type: TButtonType;
    colorScheme?: TSnotraColorSchemes;
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