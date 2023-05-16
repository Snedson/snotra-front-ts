import { MseListModel } from "@/models/ScheduleLists/MseListModel";
import { MspListModel } from "@/models/ScheduleLists/MspListModel";

export interface ModifiedScheduleSubpageResponseModel {
    todayClasses: MseListModel,
    msPsForToday: MspListModel,
}