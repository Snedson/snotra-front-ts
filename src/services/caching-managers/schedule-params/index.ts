import { MspListModel } from '@/models/ScheduleLists/MspListModel';

const handleScheduleParams = (responseMsp: MspListModel): MspListModel => {
    if (responseMsp) {
        localStorage.setItem('mspVersion', responseMsp.version);
        localStorage.setItem(
            'modifiedScheduleParams',
            JSON.stringify(responseMsp.todayScheduleParams)
        );
        return responseMsp;
    } else {
        const localMspList = localStorage.getItem('modifiedScheduleParams');
        return {
            todayScheduleParams: JSON.parse(localMspList ? localMspList : '[]'),
            version: '',
        };
    }
};

export default handleScheduleParams;
