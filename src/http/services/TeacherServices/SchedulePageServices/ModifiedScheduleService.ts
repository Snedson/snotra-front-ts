import $api from '@/http/api';
import { ModifiedScheduleRequestModel } from '@/http/pageModels/teacherModels/schedulePage/ModifiedScheduleRequestModel';
import { ModifiedScheduleResponseModel } from '@/http/pageModels/teacherModels/schedulePage/ModifiedScheduleResponseModel';
import { ModifiedScheduleStateModel } from '@/http/pageModels/teacherModels/schedulePage/ModifiedScheduleStateModel';
import { AxiosResponse } from 'axios';
import handleScheduleParams from '../../ResponseHandlers/HandleScheduleParams';

const getModifiedSchedule = (
    requestModel: ModifiedScheduleRequestModel,
    state: { data: ModifiedScheduleStateModel }
) => {
    $api.post<ModifiedScheduleResponseModel>(
        `/api/Teacher/SchedulePageModified`,
        requestModel
    ).then((response) => {
        console.log(response);
        
        state.data.response = {} as ModifiedScheduleResponseModel;
        if(response.status === 204) {
            state.data.isDayOff = true;
            return;
        }

        handleScheduleElements(response, state);
        state.data.response.msPsForToday = handleScheduleParams(
            response.data.msPsForToday
        );
        state.data.isDayOff = false;
    });
};

const handleScheduleElements = (
    response: AxiosResponse<ModifiedScheduleResponseModel>,
    state: { data: ModifiedScheduleStateModel }
) => {
    if (response.data.todayClasses) {
        state.data.response.todayClasses = response.data.todayClasses;
        localStorage.setItem('mseVersion', response.data.todayClasses.version);
        localStorage.setItem(
            'teachersMse',
            JSON.stringify(response.data.todayClasses.mseList)
        );
    } else {
        const localMseList = localStorage.getItem('teachersMse');
        console.log(state.data);
        state.data.response.todayClasses = {
            mseList: JSON.parse(localMseList ? localMseList : '[]'),
            version: '',
        };
    }
};

export default getModifiedSchedule;
