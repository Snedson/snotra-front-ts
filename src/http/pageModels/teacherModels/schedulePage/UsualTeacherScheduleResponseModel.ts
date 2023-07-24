import { UseListModel } from '@/models/ScheduleLists/UseListModel';
import { UspListModel } from '@/models/ScheduleLists/UspListModel';

export interface UsualTeacherScheduleResponseModel {
    uses: UseListModel;
    usps: UspListModel;
}
