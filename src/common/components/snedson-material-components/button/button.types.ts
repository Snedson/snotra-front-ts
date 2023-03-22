export type IButtonProps = IIconOnlySizeButtonProps | IFullSizeButtonProps;


interface IFullSizeButtonProps {
    size: TFullSize;
    type: TButton;
    innerText: string;
    iconName: string;
}

interface IIconOnlySizeButtonProps {
    size: TIconOnlySize;
    type: TButton;
    iconName: string;
}

type TButtonSize = TFullSize | TIconOnlySize;

type TFullSize = 'full';

type TIconOnlySize = 'icon-only-large' | 'icon-only-small';

type TButton = 'filled' | 'tonal' | 'outlined-transperent' | 'outlined' | 'text';
