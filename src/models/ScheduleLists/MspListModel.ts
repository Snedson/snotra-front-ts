import { ICacheable } from "@/interfaces/common-interfaces/ICacheable";
import { ScheduleParamsModel } from "../ScheduleParamsModel";

export interface MspListModel extends ICacheable {
    todayScheduleParams: Array<ScheduleParamsModel>
}