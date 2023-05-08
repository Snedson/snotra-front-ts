<template>
    <tab-menu :props="tabs" @change="selectTab"></tab-menu>
    <announces-subpage
        v-if="NotificationSubpage.Announcements"
    ></announces-subpage>
    <notification-subpage
        v-else-if="NotificationSubpage.NotificationsForStudent"
    ></notification-subpage>
    <div v-else>error</div>
</template>

<script lang="ts" setup>
import TabMenu from '@/common/components/snedson-material-components/tab-menu/tab-menu.vue';
import { ITabMenuProps } from '@/common/components/snedson-material-components/tab-menu/tab-menu.types';
import axios from 'axios';
import { reactive } from 'vue';
import { NotificationSubpage } from '@/views/pages/TeacherPages/NotificationPage/NotificationPage.types';
import AnnouncesSubpage from '@/views/pages/TeacherPages/NotificationPage/Subpages/AnnouncesSubpage/AnnouncesSubpage.vue';

const tabs: ITabMenuProps = {
    tabs: [
        { id: 0, title: 'Школьные анонсы' },
        { id: 1, title: 'Уведомления для учащихся' },
    ],
    selectedTabItemId: NotificationSubpage.Announcements,
};

const state = reactive<{ selectedTabId: number }>({
    selectedTabId: tabs.selectedTabItemId,
});

const selectTab = (tabId: number) => {
    state.selectedTabId = tabId;
};

const getNotificationPage = () => {
    axios
        .post(
            'https://mbousosh1.snotra.site/api/Teacher/NotificationPage?notificationVersion=1'
        )
        .then((response) => {
            console.log(response);
        });
    return;
};
</script>

<style lang="scss" scoped></style>
