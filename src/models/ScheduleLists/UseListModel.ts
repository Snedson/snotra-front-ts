import { ICacheable } from '@/common/types/cache-interfaces/ICacheable';
import { UsualScheduleElementModel } from '../ScheduleElelmentModel';
import { WeekDays } from './WeekDaysEnum';

export interface UseListModel extends ICacheable {
    usEsForClass: {
        [key in WeekDays]: UsualScheduleElementModel[];
    };
}
