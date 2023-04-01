import { TGoogleMaterialIcons } from "@/common/types/TGoogleMaterialIcons";

export interface IFabProps {
    size: TFabSize;
    type: TFabType;
    iconName: TGoogleMaterialIcons;
    shadowed: Boolean;
}

type TFabSize = "medium" | "small" | "large";

type TFabType = "primary" | "surface" | "secondary" | "tertiary";