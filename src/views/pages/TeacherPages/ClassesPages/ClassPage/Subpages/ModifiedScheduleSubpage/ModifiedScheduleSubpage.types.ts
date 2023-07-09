import { ModifiedScheduleElementModel } from '@/models/ScheduleElelmentModel';

export type GetModifiedScheduleSubpageResponseModel = {
    todayMSEForClass: {
        mseList: ModifiedScheduleElementModel[];
        version: string;
    };
    todayScheduleParams: unknown;
};
