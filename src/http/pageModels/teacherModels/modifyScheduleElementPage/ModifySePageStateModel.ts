import { ModifiedScheduleElementModel } from "@/models/ScheduleElelmentModel";
import { ModifySePageResponseModel } from "./ModifySePageResponseModel";

export interface ModifySePageStateModel {
    originalState: ModifySePageResponseModel;
    modifiedState: ModifiedState;
}

export type ModifiedState = Pick<ModifiedScheduleElementModel, 'locationId' | 'comments'>;