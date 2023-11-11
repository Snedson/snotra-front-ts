import { ICacheable } from '@/common/types/cache-interfaces/ICacheable';
import { ScheduleParamsModel } from '../ScheduleParamsModel';
import { WeekDays } from './WeekDaysEnum';

export interface UspListModel extends ICacheable {
    usPs: {
        [key in WeekDays]: ScheduleParamsModel[];
    };
}
