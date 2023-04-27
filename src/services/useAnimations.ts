import { TAnimationDirections } from "@/common/types/TAnimationDirections";
import { TAnimationFlows } from "@/common/types/TAnimationFlows";

export function HandleAnimation(direction: TAnimationDirections, oldId: number, newId: number) : TAnimationFlows {
    switch(direction) {
        case 'horizontal':
            return oldId < newId ? 'left-to-right' : 'right-to-left';
        case 'vertical':
            return oldId < newId ? 'top-to-down' : 'down-to-top';
        default: 
            return 'left-to-right'
    }
}