import { ModifiedScheduleElementModel } from '@/models/ScheduleElelmentModel';
import { ScheduleParamsModel } from '@/models/ScheduleParamsModel';

export type GetModifiedScheduleSubpageResponseModel = {
    todayMSEForClass: {
        mseList: ModifiedScheduleElementModel[];
        version: string;
    };
    todayScheduleParams: {
        todayScheduleParams: ScheduleParamsModel[];
    };
};
