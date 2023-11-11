<template>
    <div>
        <tab-menu :props="state" @change="selectTab" />
        <div class="subpage">
            <announcements-subpage
                v-if="
                    state.selectedTabItemId ===
                    NotificationSubpage.Announcements
                "
            ></announcements-subpage>
            <notifications-from-teachers-subpage
                v-else-if="
                    state.selectedTabItemId ===
                    NotificationSubpage.NotificationsFromTeachers
                "
            >
            </notifications-from-teachers-subpage>
            <div v-else>error</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TabMenu from '@/common/components/snedson-material-components/tab-menu/tab-menu.vue';
import { ITabMenuProps } from '@/common/components/snedson-material-components/tab-menu/tab-menu.types';
import { reactive } from 'vue';
import { NotificationSubpage } from './NotificationPage.types';
import AnnouncementsSubpage from '@/views/pages/CommonPages/AnnouncementsSubpage/AnnouncementsSubpage.vue';
import NotificationsFromTeachersSubpage from './Subpages/NotificationsFromTeachersSubpage/NotificationsFromTeachersSubpage.vue';
import router from '@/router';

const state = reactive<ITabMenuProps>({
    tabs: [
        { id: NotificationSubpage.Announcements, title: 'Школьные анонсы' },
        {
            id: NotificationSubpage.NotificationsFromTeachers,
            title: 'Уведомления от учителей',
        },
    ],
    selectedTabItemId: NotificationSubpage.Announcements,
});

const selectTab = (tabId: NotificationSubpage) => {
    state.selectedTabItemId = tabId;

    if (tabId == NotificationSubpage.Announcements) {
        router.push({ name: 'sn.student.notifications.announces' });
    } else {
        router.push({ name: 'sn.student.notifications.fromTeachers' });
    }
};
</script>

<style scoped lang="scss">
.subpage {
    padding-top: 30px;
}
</style>
