import { ScheduleParamsModel } from '@/models/ScheduleParamsModel';

export const findScheduleParam = (
    params: ScheduleParamsModel[],
    num: number
) => {
    return params[
        params.findIndex((value) => {
            return value.num === num;
        })
    ];
};
