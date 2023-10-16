import $api from '@/http/api';
import { GetStudentMenuPageResponseModel } from '@/http/pageModels/studentModels/menuPage/GetStudentMenuPageResponseModel';
import { EmptyResponse } from '@/models/EmptyResponse';
import { isSetStatusResponse, SetStatusResponse } from './SetStatusPage.types';
import router from '@/router';
import { AxiosError } from 'axios';

export const getStudentMenuPage = () => {
    return $api.get<GetStudentMenuPageResponseModel>('/api/Student/MenuPage');
};

export const postSetStatus = (requestModel: {
    statusId: number;
    comment: string;
}) => {
    $api.post<SetStatusResponse | null>('/api/Student/SetStatus', requestModel)
        .then((response) => {
            if (isSetStatusResponse(response.data)) {
                //alert(buildAlertText(response.data)); // TODO: buildAlertText should be tested before implementing.
                router.push({
                    name: 'sn.student.user',
                });
            } else {
                router.push({
                    name: 'sn.student.user',
                });
            }
        })
        .catch((reason: AxiosError<EmptyResponse>) => {
            alert(reason.response?.data.errorTextForUser);
        });
};

const buildAlertText = (response: SetStatusResponse) => {
    let result = 'Статус успешно установлен. \n';
    if (response.teacherRecievers) {
        result += 'Уведомлены следующие учителя: \n';
        for (const teacherFullName in response.teacherRecievers) {
            result += teacherFullName;
            response.teacherRecievers[teacherFullName]
                ? (result += '(классный руководитель), \n')
                : (result += ', \n');
        }
    }

    if (response.studentCantOverrideDescription) {
        result += '\nВы НЕ можете изменить этот статус \n';
    } else {
        result += '\nВы можете изменить этот статус \n';
    }

    if (response.isOverrideAtTheSameDayAvaliable) {
        result += '\nВы НЕ можете изменить этот статус сегодня \n';
    } else {
        result += '\nВы можете изменить этот статус сегодня \n';
    }

    if (response.deleteRecordsAutomaticly) {
        result +=
            '\nСтатус автоматически будет изменен на стандартный завтра \n';
    } else {
        result += '\nСтатус НЕ будет автоматически изменен на стандартный \n';
    }

    return result;
};
