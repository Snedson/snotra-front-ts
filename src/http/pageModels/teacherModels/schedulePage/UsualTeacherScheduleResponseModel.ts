import { UsualScheduleElementModel } from '@/models/ScheduleElelmentModel';
import { ScheduleParamsModel } from '@/models/ScheduleParamsModel';

export interface UsualTeacherScheduleResponseModel {
    uses: {
        usEsForClass: {
            [key in WeekDays]: UsualScheduleElementModel[];
        };
        version: string;
    };
    usPs: {
        usPs: {
            [key in WeekDays]: ScheduleParamsModel[];
        };
        version: string;
    };
}

export enum WeekDays {
    Monday = 'monday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
    Thursday = 'thursday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday',
}
