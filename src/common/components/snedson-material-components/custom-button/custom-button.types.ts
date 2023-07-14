import { TGoogleMaterialIcons } from '@/common/components/helper-components/google-material-icon/google-material-icon.types';

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

export type TFullSize =
    | 'full'
    | 'full-resizable-to-icon-large'
    | 'full-resizable-to-icon-small';

export type TIconOnlySize = 'icon-only-large' | 'icon-only-small';

type TButtonType =
    | 'filled'
    | 'tonal'
    | 'outlined-transparent'
    | 'outlined'
    | 'text';

export function isTFullSize(buttonSize: TButtonSize): buttonSize is TFullSize {
    return (
        buttonSize === 'full' ||
        buttonSize === 'full-resizable-to-icon-large' ||
        buttonSize === 'full-resizable-to-icon-small'
    );
}
