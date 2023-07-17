import { WeekDays } from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';

export function getWeekdayTitle(weekday: WeekDays): string {
    switch (weekday) {
        case WeekDays.Monday:
            return 'Понедельник';
        case WeekDays.Tuesday:
            return 'Вторник';
        case WeekDays.Wednesday:
            return 'Среда';
        case WeekDays.Thursday:
            return 'Четверг';
        case WeekDays.Friday:
            return 'Пятница';
        case WeekDays.Saturday:
            return 'Суббота';
        case WeekDays.Sunday:
            return 'Воскресенье';
    }
}
