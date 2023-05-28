import $api from '@/http/api';
import { ModifySeRequestModel } from '@/http/pageModels/teacherModels/modifyScheduleElementPage/ModifySePageRequestModel';
import { ModifySePageResponseModel } from '@/http/pageModels/teacherModels/modifyScheduleElementPage/ModifySePageResponseModel';
import { ModifiedState, ModifySePageStateModel } from '@/http/pageModels/teacherModels/modifyScheduleElementPage/ModifySePageStateModel';
import handleScheduleParams from '../../ResponseHandlers/HandleScheduleParams';

const getModifyScheduleElementPage = (
    requestModel: ModifySeRequestModel,
    state: { data: ModifySePageStateModel }
) => {
    console.log(requestModel);
    $api.post<ModifySePageResponseModel>(
        `/api/Teacher/ModifyLessonPage`,
        {},
        {
            params: requestModel,
        }
    ).then((response) => {
        console.log(response);
        state.data.originalState = handleOriginalState(response.data);
        state.data.modifiedState = handleModifiedState(response.data);
    });
};

const handleOriginalState = (response:ModifySePageResponseModel) : ModifySePageResponseModel => {
    return {
        actualMse: response.actualMse,
        isClientMSEGuidDiffers: response.isClientMSEGuidDiffers,
        locationsList: response.locationsList,
        todayScheduleParams: handleScheduleParams(
            response.todayScheduleParams
        )
    }
}

const handleModifiedState = (response:ModifySePageResponseModel) : ModifiedState => {
    return {
        locationId: response.actualMse.locationId,
        comments: response.actualMse.comments
    }
}

export default getModifyScheduleElementPage;
