<template>
    <div class="user-page" v-if="state.data !== null">
        <user-header
            :props="{
                name: state.data.name,
                surname: state.data.surname,
                //patronymic: state.data.patronymic,
                subheaderIcon: currentStatus?.iconURL,
                subheader: currentStatus?.statusName,
            }"
        />
        <menu-list
            :props="{
                items: [
                    {
                        icon: 'person_pin_circle',
                        title: 'Статус посещения',
                        content: `Текущий: ${currentStatus?.statusName}`,
                        button: {
                            iconName: 'edit',
                            innerText: 'Сменить',
                            size: 'full-resizable-to-icon-large',
                            type: 'text',
                        },
                        buttonCallback: onChangeStatusButtonClick,
                    },
                    {
                        icon: 'info',
                        title: 'Данные класса',
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
import { computed, onMounted, reactive } from 'vue';
import {
    GetStudentMenuPageResponseModel,
    StudentStatus,
} from '@/http/pageModels/studentModels/menuPage/GetStudentMenuPageResponseModel';
import { getStudentMenuPage } from './apiMethods';
import { useRouter } from 'vue-router';
import MenuList from '@/common/components/snedson-material-components/menu-list/menu-list.vue';
import UserHeader from '@/common/components/snedson-material-components/user-header/user-header.vue';
import AuthService from '@/services/AuthService';

const state = reactive<{ data: GetStudentMenuPageResponseModel | null }>({
    data: null,
});

const router = useRouter();

const onChangeStatusButtonClick = () => {
    router.push({ name: 'sn.student.user.setStatus' });
};

const currentStatus = computed((): StudentStatus | null => {
    if (!state.data) {
        return null;
    }

    return state.data?.allStatusesForStudents[
        state.data.allStatusesForStudents.findIndex(
            (value) => value.statusID === state.data?.currentStatusID
        )
    ];
});

onMounted(() => {
    getStudentMenuPage().then((res) => {
        state.data = res.data;
        console.log(res);
    });
});
</script>
<style lang="scss">
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
