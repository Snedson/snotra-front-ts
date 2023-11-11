import { MaterialShape } from '../material-shape-container.types';

export type IMaterialShapedIconProps =
    | IMaterialShapedIconPropsWithLocalUrl
    | IMaterialShapedIconPropsWithCompleteUrl;

interface IMaterialShapedIconPropsBase {
    color: string;
    shape: MaterialShape;
}

interface IMaterialShapedIconPropsWithLocalUrl
    extends IMaterialShapedIconPropsBase {
    iconLocal: string;
    iconCompleteUrl?: never;
}

interface IMaterialShapedIconPropsWithCompleteUrl
    extends IMaterialShapedIconPropsBase {
    iconLocal?: never;
    iconCompleteUrl: string;
}
