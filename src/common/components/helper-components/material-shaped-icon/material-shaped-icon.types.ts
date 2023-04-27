export type IMaterialShapedIconProps = IMaterialShapedIconPropsWithLocalUrl | IMaterialShapedIconPropsWithCompleteUrl;

interface IMaterialShapedIconPropsBase {
    color: string, 
    shape: MaterialShape,
}

interface IMaterialShapedIconPropsWithLocalUrl extends IMaterialShapedIconPropsBase {
    iconLocal: string,
    iconCompleteUrl?: never,
}

interface IMaterialShapedIconPropsWithCompleteUrl extends IMaterialShapedIconPropsBase {
    iconLocal?: never,
    iconCompleteUrl: string,
}

type MaterialShape = 'eight-pointed-shape' | 'ten-pointed-shape'