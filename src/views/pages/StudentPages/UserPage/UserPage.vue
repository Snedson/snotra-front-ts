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
        <ul class="user-data material-card_type_outlined">
            <li class="user-data-item">
                <div class="user-data-item__image-cont">
                    <GoogleMaterialIcon
                        :props="{ iconName: 'person_pin_circle' }"
                        class="user-data-item__icon"
                    ></GoogleMaterialIcon>
                </div>
                <div class="user-data-item__payload">
                    <div class="user-data-item__content">
                        <h2 class="user-data-item__title">Статус посещения</h2>
                        <p class="user-data-item__info">
                            Текущий: {{ currentStatus?.statusName }}
                        </p>
                    </div>
                    <div class="user-data-item__actions">
                        <CustomButton
                            :props="{
                                iconName: 'edit',
                                innerText: 'Сменить',
                                size: 'full-resizable-to-icon-small',
                                type: 'text',
                            }"
                            :onclick="onChangeStatusButtonClick"
                        ></CustomButton>
                    </div>
                </div>
            </li>
            <li class="user-data-item">
                <div class="user-data-item__image-cont">
                    <GoogleMaterialIcon
                        :props="{ iconName: 'info' }"
                        class="user-data-item__icon"
                    ></GoogleMaterialIcon>
                </div>
                <div class="user-data-item__payload">
                    <div class="user-data-item__content">
                        <h2 class="user-data-item__title">Данные класса</h2>
                    </div>
                </div>
            </li>
            <li class="user-data-item">
                <div class="user-data-item__image-cont">
                    <GoogleMaterialIcon
                        :props="{ iconName: 'school' }"
                        class="user-data-item__icon"
                    ></GoogleMaterialIcon>
                </div>
                <div class="user-data-item__payload">
                    <div class="user-data-item__content">
                        <h2 class="user-data-item__title">Данные школы</h2>
                    </div>
                </div>
            </li>
            <li class="user-data-item">
                <div class="user-data-item__image-cont">
                    <GoogleMaterialIcon
                        :props="{ iconName: 'logout' }"
                        class="user-data-item__icon"
                    ></GoogleMaterialIcon>
                </div>
                <div class="user-data-item__payload">
                    <div class="user-data-item__content">
                        <h2 class="user-data-item__title">Выход из аккаунта</h2>
                    </div>
                    <div class="user-data-item__actions">
                        <CustomButton
                            :props="{
                                type: 'text',
                                iconName: 'logout',
                                innerText: 'Выйти',
                                size: 'full-resizable-to-icon-small',
                            }"
                        ></CustomButton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive } from 'vue';
import { GetStudentMenuPageResponseModel } from '@/http/pageModels/studentModels/menuPage/GetStudentMenuPageResponseModel';
import { getStudentMenuPage } from './apiMethods';
import CustomButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';
import { StudentStatus } from '@/http/pageModels/teacherModels/classPage/AbsentStudentsResponseModel';
import { useRouter } from 'vue-router';
import GoogleMaterialIcon from '@/common/components/helper-components/google-material-icon/google-material-icon.vue';

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

.user-data {
    list-style: none;
    padding: 15px 0 15px 10px;
    border-radius: 10px;
}

.user-data-item {
    display: flex;
    flex-direction: row;
    gap: 20px;
    &:not(:last-child) {
        .user-data-item__payload {
            border-bottom: 1px solid var(--snotra--sys--outline);
        }
    }

    &:not(:first-child) {
        margin-top: 20px;
    }

    &__title {
        color: var(--snotra-sys-light-on-surface);
        font-size: 30px;
        font-weight: 700;
    }

    &__payload {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    &__content {
        padding: 0 0 20px 0;
    }

    &__actions {
        margin-right: 20px;
    }

    &__info {
        margin-top: 8px;
        color: var(--snotra--sys--on-surface-second-text);
    }

    &__icon {
        font-size: 35px;
    }
}
</style>
