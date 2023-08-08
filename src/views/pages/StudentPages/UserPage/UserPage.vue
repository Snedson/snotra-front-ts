<template>
    <div class="user-page" v-if="state.data !== null">
        <div class="user-page-header material-card_type_outlined">
            <div class="user-page-header__avatar"></div>
            <div class="user-page-header__data">
                <h1 class="user-page-header__name">
                    {{ state.data.name }} {{ state.data.surname }}
                </h1>
                <div class="user-page-header__status">
                    <img
                        :src="`https://mbousosh1.snotra.site/${currentStatus?.iconURL}`"
                        alt=""
                        class="user-page-header__status-icon"
                    />
                    <p class="user-page-header__status-text">
                        {{ currentStatus?.statusName }}
                    </p>
                </div>
            </div>
        </div>
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

.user-page-header {
    padding: 25px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-radius: 10px;

    &__avatar {
        border-radius: 150px;
        width: 150px;
        height: 150px;
        background: gray;
    }

    &__status-icon {
        width: 30px;
        height: 30px;
    }

    &__status {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }

    &__status-text {
        font-size: 25px;
        font-weight: 700;
        color: var(--snotra--sys--on-surface-second-text);
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
