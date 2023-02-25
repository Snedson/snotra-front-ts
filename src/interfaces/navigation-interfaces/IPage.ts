export interface IPages {
    [index: string]: {
        fabData: IFab | null;
        contentHeaderData: {
            backgroundImageUrl: NodeRequire;
            backgroundImageShift: number;
            h1: string;
            h2: string;
            h3: string;
        };
    };
}

interface IFab {
    iconName: string;
    callback: Function;
}
