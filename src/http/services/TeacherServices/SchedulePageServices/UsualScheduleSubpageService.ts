import $api from '@/http/api';
import { UsualTeacherScheduleRequestModel } from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleRequestModel';
import { UsualTeacherScheduleResponseModel } from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';
import { AxiosResponse } from 'axios';

export class UsualScheduleSubpageService {
    public static getUsualSchedulePage(
        requestModel: UsualTeacherScheduleRequestModel
    ) {
        return $api.post<
            UsualTeacherScheduleRequestModel,
            AxiosResponse<UsualTeacherScheduleResponseModel>,
            UsualTeacherScheduleRequestModel
        >(
            'https://sixtyfour.snotra.site/api/Teacher/SchedulePageUsual',
            requestModel
        );
    }
}
