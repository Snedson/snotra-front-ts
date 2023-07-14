export interface IAnimationFlow {
    flow: TAnimationFlows;
}

export type TAnimationFlows =
    | 'left-to-right'
    | 'right-to-left'
    | 'top-to-down'
    | 'down-to-top';
