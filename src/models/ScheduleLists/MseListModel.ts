import { ICacheable } from "@/interfaces/common-interfaces/ICacheable";
import { ModifiedScheduleElementModel } from "../ScheduleElelmentModel";

export interface MseListModel extends ICacheable {
    mseList: Array<ModifiedScheduleElementModel>
}