import $api from '@/http/api';
import { AbsentStudentsResponseModel } from '@/http/pageModels/teacherModels/classPage/AbsentStudentsResponseModel';

export class AbsentStudentsService {
    public static getAbsentStudents(classId: number) {
        const currentVersion = this.getClassAbsentStudentsListVersion(classId);
        return $api.get<AbsentStudentsResponseModel>(
            `/api/Teacher/ClassStudentsByStatusesPage?classId=${classId}&classStatusListVersion=${currentVersion}`
        );
    }

    public static handleClassAbsentStudents(
        classId: number,
        students: AbsentStudentsResponseModel
    ) {
        if (students.studentsStatuses) {
            const studentStatusesByClasses = JSON.parse(
                localStorage.getItem('studentStatusesByClasses') || '{}'
            );
            studentStatusesByClasses[classId] = students;
            localStorage.setItem(
                'studentStatusesByClasses',
                JSON.stringify(studentStatusesByClasses)
            );

            return students.studentsStatuses;
        } else {
            const studentStatusesByClasses = JSON.parse(
                localStorage.getItem('studentStatusesByClasses') || '{}'
            );
            return studentStatusesByClasses[classId].studentsStatuses;
        }
    }

    private static getClassAbsentStudentsListVersion(classId: number): string {
        const studentStatusesByClasses = JSON.parse(
            localStorage.getItem('studentStatusesByClasses') || '{}'
        );
        return studentStatusesByClasses[classId]?.version;
    }
}
