<template>
    <div>
        <tab-menu :props="state" @change="selectTab"></tab-menu>
        <div class="subpage">
            <announces-subpage
                v-if="
                    state.selectedTabItemId ===
                    NotificationSubpage.Announcements
                "
            ></announces-subpage>
            <notifications-for-students-subpage
                v-else-if="
                    state.selectedTabItemId ===
                    NotificationSubpage.NotificationsForStudent
                "
            ></notifications-for-students-subpage>
            <div v-else>error</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TabMenu from '@/common/components/snedson-material-components/tab-menu/tab-menu.vue';
import { ITabMenuProps } from '@/common/components/snedson-material-components/tab-menu/tab-menu.types';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import NotificationsForStudentsSubpage from '@/views/pages/TeacherPages/NotificationPage/Subpages/NotificationsForStudentsSubpage/NotificationsForStudentsSubpage.vue';
import { NotificationSubpage } from '@/views/pages/TeacherPages/NotificationPage/NotificationPage.types';
import AnnouncesSubpage from '@/views/pages/TeacherPages/NotificationPage/Subpages/AnnouncesSubpage/AnnouncesSubpage.vue';

const state = reactive<ITabMenuProps>({
    tabs: [
        { id: NotificationSubpage.Announcements, title: 'Школьные анонсы' },
        {
            id: NotificationSubpage.NotificationsForStudent,
            title: 'Уведомления для учащихся',
        },
    ],
    selectedTabItemId: NotificationSubpage.Announcements,
});

const selectTab = (tabId: NotificationSubpage) => {
    state.selectedTabItemId = tabId;
};
</script>

<style lang="scss" scoped>
.subpage {
    padding-top: 30px;
}
</style>
