import { ICacheable } from '@/common/types/cache-interfaces/ICacheable';
import { ModifiedScheduleElementModel } from '../ScheduleElelmentModel';

export interface MseListModel extends ICacheable {
    mseList: Array<ModifiedScheduleElementModel>;
}
