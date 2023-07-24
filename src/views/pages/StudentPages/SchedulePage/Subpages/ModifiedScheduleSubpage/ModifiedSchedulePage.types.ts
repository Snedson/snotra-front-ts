import { MseListModel } from '@/models/ScheduleLists/MseListModel';
import { MspListModel } from '@/models/ScheduleLists/MspListModel';

export type GetStudentModifiedScheduleSubpageResponseModel = {
    msesForToday: MseListModel;
    mspsForToday: MspListModel;
};
