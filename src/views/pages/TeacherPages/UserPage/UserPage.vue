<template>
    <div class="user-page" v-if="state.data !== null">
        <user-header
            :props="{
                name: state.data.firstname,
                surname: state.data.surname,
                subheader: state.data.jobTitle,
            }"
        />
        <menu-list
            :props="{
                items: [
                    {
                        icon: 'supervised_user_circle',
                        title: 'Классное руководство',
                        content: state.data.masterClass
                            ? state.data.masterClass.className
                            : 'Отсутствует',
                    },
                    {
                        icon: 'school',
                        title: 'Данные школы',
                    },
                    {
                        icon: 'logout',
                        title: 'Выход из аккаунта',
                        button: {
                            type: 'text',
                            iconName: 'logout',
                            innerText: 'Выйти',
                            size: 'full-resizable-to-icon-large',
                        },
                        buttonCallback: AuthService.logout,
                    },
                ],
            }"
        />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { getTeacherUserPage } from './apiMethods';
import { TeacherUserPageResponse } from './UserPage.types';
import MenuList from '@/common/components/snedson-material-components/menu-list/menu-list.vue';
import UserHeader from '@/common/components/snedson-material-components/user-header/user-header.vue';
import AuthService from '@/services/AuthService';

const state = reactive<{ data: TeacherUserPageResponse | null }>({
    data: null,
});

onMounted(() => {
    getTeacherUserPage().then((res) => {
        state.data = res.data;
        console.log(res);
    });
});
</script>

<style lang="scss" scoped>
.user-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & > * {
        width: 100%;
    }
}

@media (max-width: 800px) {
    .user-page-header {
        flex-direction: column;

        &__data {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>
