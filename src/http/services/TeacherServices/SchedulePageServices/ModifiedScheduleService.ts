import $api from '@/http/api';
import { ModifiedScheduleRequestModel } from '@/http/pageModels/teacherModels/schedulePage/ModifiedScheduleRequestModel';
import { ModifiedScheduleResponseModel } from '@/http/pageModels/teacherModels/schedulePage/ModifiedScheduleResponseModel';
import { AxiosResponse } from 'axios';
import handleScheduleParams from '../../ResponseHandlers/HandleScheduleParams';

const getModifiedSchedule = (
    requestModel: ModifiedScheduleRequestModel,
    state: { data: ModifiedScheduleResponseModel }
) => {
    $api.post<ModifiedScheduleResponseModel>(
        `/api/Teacher/SchedulePageModified`,
        requestModel
    ).then((response) => {
        console.log(response);
        handleScheduleElements(response, state);
        state.data.msPsForToday = handleScheduleParams(
            response.data.msPsForToday
        );
    });
};

const handleScheduleElements = (
    response: AxiosResponse<ModifiedScheduleResponseModel>,
    state: { data: ModifiedScheduleResponseModel }
) => {
    if (response.data.todayClasses) {
        state.data.todayClasses = response.data.todayClasses;
        localStorage.setItem('mseVersion', response.data.todayClasses.version);
        localStorage.setItem(
            'teachersMse',
            JSON.stringify(response.data.todayClasses.mseList)
        );
    } else {
        const localMseList = localStorage.getItem('teachersMse');
        console.log(state.data);
        state.data.todayClasses = {
            mseList: JSON.parse(localMseList ? localMseList : '[]'),
            version: '',
        };
    }
};

export default getModifiedSchedule;
