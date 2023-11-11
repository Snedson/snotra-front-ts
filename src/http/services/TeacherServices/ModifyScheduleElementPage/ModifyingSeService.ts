import $api from "@/http/api";
import { ModifyingSeRequestModel } from "@/http/pageModels/teacherModels/modifyScheduleElementPage/ModifyingSeRequestModel";
import { EmptyResponse } from "@/models/EmptyResponse";
import router from "@/router";
import { AxiosError } from "axios";

const patchModifyingSeService = (requestModel: ModifyingSeRequestModel, returnTo: string | null) => {
    $api.patch<EmptyResponse>(
        `/api/Teacher/ModifyLesson`, 
        requestModel
    ).then((response) => {
        if(response && response.status === 200) {
            router.push({ 
                name: returnTo ? returnTo : 'sn.teacher.schedule.mse'
            });
        }
        
    })
    .catch((reason: AxiosError<EmptyResponse> ) => {
        alert(reason.response?.data.errorTextForUser);
    })
}

export default patchModifyingSeService;