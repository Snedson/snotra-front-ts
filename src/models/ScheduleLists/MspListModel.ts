import { ICacheable } from '@/common/types/cache-interfaces/ICacheable';
import { ScheduleParamsModel } from '../ScheduleParamsModel';

export interface MspListModel extends ICacheable {
    todayScheduleParams: Array<ScheduleParamsModel>;
}
