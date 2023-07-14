import { TGoogleMaterialIcons } from '@/common/components/helper-components/google-material-icon/google-material-icon.types';

export interface IFabProps {
    size: TFabSize;
    type: TFabType;
    iconName: TGoogleMaterialIcons;
    shadowed: boolean;
}

type TFabSize = 'medium' | 'small' | 'large';

type TFabType = 'primary' | 'surface' | 'secondary' | 'tertiary';
