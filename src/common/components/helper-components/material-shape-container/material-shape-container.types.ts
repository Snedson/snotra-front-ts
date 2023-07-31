export interface IMaterialShapeContainer {
    shape: MaterialShape;
    strokeWidth: number;
}

export type MaterialShape =
    | 'eight-pointed-shape'
    | 'ten-pointed-shape'
    | 'ten-pointed-smooth-shape'
    | 'four-pointed-shape';
