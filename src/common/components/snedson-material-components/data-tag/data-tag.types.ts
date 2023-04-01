export type IDataTagProps = IDataTagPropsWithLocalUrl | IDataTagPropsWithCompleteUrl;

interface IDataTagPropsBase {
    title: string,
    color: string,
}

interface IDataTagPropsWithLocalUrl extends IDataTagPropsBase {
    iconLocal: string,
    iconCompleteUrl?: never,
}

interface IDataTagPropsWithCompleteUrl extends IDataTagPropsBase {
    iconLocal?: never,
    iconCompleteUrl: string,
}