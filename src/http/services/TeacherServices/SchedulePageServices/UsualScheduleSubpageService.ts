import $api from '@/http/api';
import { UsualTeacherScheduleRequestModel } from '@/http/models/requestModels/teacherRequestModels/schedulePage/UsualTeacherScheduleRequestModel';
import { UsualTeacherScheduleResponseModel } from '@/http/models/responseModels/teacherResponseModels/schedulePage/UsualTeacherScheduleResponseModel';
import { AxiosResponse } from 'axios';

export class UsualScheduleSubpageService {
    public static getUsualSchedulePage(
        requestModel: UsualTeacherScheduleRequestModel
    ) {
        return $api.post<
            UsualTeacherScheduleResponseModel,
            AxiosResponse<UsualTeacherScheduleResponseModel>,
            UsualTeacherScheduleRequestModel
        >(
            'https://sixtyfour.snotra.site/api/Teacher/SchedulePageUsual',
            requestModel
        );
    }
}
