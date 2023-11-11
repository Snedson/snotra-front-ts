import { ModifiedScheduleElementModel } from "@/models/ScheduleElelmentModel";
import { MspListModel } from "@/models/ScheduleLists/MspListModel";

export interface ModifySePageResponseModel {
    actualMse: ModifiedScheduleElementModel,
    locationsList: { [key: number]: string },
    isClientMSEGuidDiffers: boolean,
    todayScheduleParams: MspListModel,
}