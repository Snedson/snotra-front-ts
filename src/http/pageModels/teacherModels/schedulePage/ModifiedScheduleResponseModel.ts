import { MseListModel } from "@/models/ScheduleLists/MseListModel";
import { MspListModel } from "@/models/ScheduleLists/MspListModel";

export interface ModifiedScheduleResponseModel {
    todayClasses: MseListModel,
    msPsForToday: MspListModel,
}