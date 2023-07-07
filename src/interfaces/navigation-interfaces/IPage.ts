import { TGoogleMaterialIcons } from '@/common/types/TGoogleMaterialIcons';

export interface IPages {
    [index: string]: {
        fabData: IFab | null;
        contentHeaderData: {
            backgroundImageUrl: NodeRequire;
            backgroundImageDarkUrl?: NodeRequire;
            backgroundImageShift: number;
            h1: string;
            h2: string;
            h3: string;
            browserTitle: string;
        };
    };
}

interface IFab {
    iconName: TGoogleMaterialIcons;
    callback: Function;
}
