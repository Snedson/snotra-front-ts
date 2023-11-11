import { UsualScheduleElementModel } from '@/models/ScheduleElelmentModel';
import { WeekDays } from '@/models/ScheduleLists/WeekDaysEnum';
import { ScheduleParamsModel } from '@/models/ScheduleParamsModel';

export type UsualTeacherClassSubpageResponseModel = {
    usEsForClass: {
        [key in WeekDays]: UsualScheduleElementModel[];
    };
    usPs: {
        usPs: {
            [key in WeekDays]: ScheduleParamsModel[];
        };
        version: string;
    };
};
