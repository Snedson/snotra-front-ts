import $api from "@/http/api";
import { ModifiedScheduleSubpageRequestModel } from "@/http/models/requestModels/teacherRequestModels/schedulePage/ModifiedScheduleSubpageRequestModel";
import { ModifiedScheduleSubpageResponseModel } from "@/http/models/responseModels/teacherResponseModels/schedulePage/ModifiedScheduleSubpageResponseModel";


const getModifiedScheduleSubpage = (requestModel: ModifiedScheduleSubpageRequestModel, state: { data: ModifiedScheduleSubpageResponseModel }) => {
    $api.post<ModifiedScheduleSubpageResponseModel>(
        `/api/Teacher/SchedulePageModified`, requestModel
    ).then((response) => {
        console.log(response);
        handleScheduleElements(response, state);
        handleScheduleParams(response, state);
    });
};

const handleScheduleElements = (response, state) => {
    if(response.data.todayClasses) {
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
            mseList: JSON.parse(
                localMseList ? localMseList : '[]'
            ), version: '',
        }
    }
}

const handleScheduleParams = (response, state) => {
    if(response.data.msPsForToday) {
        state.data.msPsForToday = response.data.msPsForToday;
        localStorage.setItem('mspVersion', response.data.msPsForToday.version);
        localStorage.setItem(
            'modifiedScheduleParams',
            JSON.stringify(response.data.msPsForToday.todayScheduleParams)
        );
    } else {
        const localMspList = localStorage.getItem('modifiedScheduleParams');
        state.data.msPsForToday = {
            todayScheduleParams: JSON.parse(
                localMspList ? localMspList : '[]'
            ), version: ''
        }
    }
}

export default getModifiedScheduleSubpage;