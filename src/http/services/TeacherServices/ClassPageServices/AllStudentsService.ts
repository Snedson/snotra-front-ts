import $api from '@/http/api';
import { AllStudentsResponseModel } from '@/http/pageModels/teacherModels/classPage/AllStudentsResponseModel';

export class AllStudentsService {
    public static getAllStudents(classId: number) {
        return $api.get<AllStudentsResponseModel>(
            `/api/Teacher/AllStudentsOfClassPage?classId=${classId}`
        );
    }
}
