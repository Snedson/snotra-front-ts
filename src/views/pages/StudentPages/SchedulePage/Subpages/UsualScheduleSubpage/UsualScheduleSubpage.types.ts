import { UseListModel } from '@/models/ScheduleLists/UseListModel';
import { UspListModel } from '@/models/ScheduleLists/UspListModel';

export type GetStudentUsualScheduleSubpageResponseModel = {
    uses: UseListModel;
    usps: UspListModel;
};
