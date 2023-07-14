import { WeekDays } from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';
import { UsualScheduleElementModel } from '@/models/ScheduleElelmentModel';
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
