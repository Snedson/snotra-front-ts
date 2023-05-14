import { NotificationSubpage } from '@/views/pages/TeacherPages/NotificationPage/NotificationPage.types';

export interface ITabMenuProps {
    tabs: ITab[];
    selectedTabItemId: NotificationSubpage;
}

interface ITab {
    id: number;
    title: string;
}
