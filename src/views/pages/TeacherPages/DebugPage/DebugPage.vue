<template>
    <tab-menu
        :props="{
            tabs: tabs.tabs,
            selectedTabItemId: tabs.selected,
            selectTabItemFunction: setSelectedTab,
        }"
    />
    <p style="margin-top: 25px">Teacher's Debug Page</p>
    <p v-if="tabs.selected == 0">Subpage 1</p>
    <p v-if="tabs.selected == 1">Subpage 2</p>
    <data-tag
        :props="{
            title: 'Весь класс',
            color: 'var(--snotra--surfaces--surface1)',
            iconLocal: 'teacher.png',
        }"
    />
    <on-air style="margin-top: 15px" />

    <div class="ruthenian-blue heeej">
        <custom-button
            :props="{
                size: 'icon-only-large',
                type: 'outlined',
                //        colorSchemeName: 'ruthenian-red',
                iconName: 'edit',
                colorScheme: 'ruthenian-blue',
            }"
        ></custom-button>

        <custom-button
            :props="{
                size: 'full',
                type: 'filled',
                //        colorSchemeName: 'ruthenian-red',
                iconName: 'dashboard',
                innerText: 'Измененное расписание',
                colorScheme: 'ruthenian-blue',
            }"
        ></custom-button>
    </div>

    <custom-button
        :props="{
            size: 'icon-only-large',
            type: 'outlined',

            //        colorSchemeName: 'ruthenian-red',
            iconName: 'dashboard',
        }"
    ></custom-button>

    <custom-button
        :props="{
            size: 'icon-only-large',
            type: 'outlined-transparent',
            //        colorSchemeName: 'ruthenian-red',
            iconName: 'dashboard',
        }"
    ></custom-button>

    <custom-button
        :props="{
            size: 'icon-only-small',
            type: 'outlined',
            //        colorSchemeName: 'ruthenian-red',
            iconName: 'dashboard',
        }"
    ></custom-button>

    <universal-card
        :props="{
            title: '1. Обществознание',
            content: 'Лорем ипсум',
            buttons: [
                {
                    iconName: 'supervised_user_circle',
                    type: 'outlined',
                    size: 'icon-only-large',
                },
                {
                    iconName: 'edit',
                    innerText: 'Изменить данные урока',
                    type: 'filled',
                    size: 'full',
                },
            ],
            isOnAir: false,
            dataTags: [
                {
                    title: '8:30 - 9:15 (45 мин.)',
                    color: 'var(--snotra--surfaces--surface1)',
                    iconCompleteUrl: whatever,
                },
                {
                    title: 'Кабинет 24',
                    color: 'var(--snotra--surfaces--surface1)',
                    iconCompleteUrl: whatever,
                },
                {
                    title: 'Весь класс',
                    color: 'var(--snotra--surfaces--surface1)',
                    iconCompleteUrl: whatever,
                },
                {
                    title: 'Перемена после: 15 минут',
                    color: 'var(--snotra--surfaces--surface1)',
                    iconCompleteUrl: whatever,
                },
            ],
            icon: whatever,
            type: 'outlined',
        }"
    ></universal-card>
    <material-shaped-icon
        :props="{
            color: 'hej',
            shape: 'ten-pointed-shape',
            iconCompleteUrl: '',
        }"
    ></material-shaped-icon>
</template>

<script lang="ts" setup>
import tabMenu from '@/common/components/snedson-material-components/tab-menu/tab-menu.vue';
import dataTag from '@/common/components/snedson-material-components/data-tag/data-tag.vue';
import onAir from '@/common/components/snedson-material-components/on-air/on-air.vue';
import CustomButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';
import { reactive } from 'vue';
import router from '@/router';
import whatever from '@/assets/icons/emojis/teacher.png';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import MaterialShapedIcon from '@/common/components/helper-components/material-shaped-icon/material-shaped-icon.vue';
import { defineEmits } from 'vue';
// import { TAnimationFlows } from '@/common/types/TAnimationFlows';
// import { HandleAnimation } from '@/services/useAnimations';

// const emit = defineEmits<{
//     (e: 'changeFlow', flow: TAnimationFlows): void;
// }>();

const tabs = reactive({
    tabs: [
        {
            id: 0,
            title: 'Подстраница 1',
            iconUrl: '',
        },
        {
            id: 1,
            title: 'Подстраница 2',
            iconUrl: '',
        },
    ],
    selected: 0,
});

// const setSelectedTab = (selectedId) => {
//     var direction = HandleAnimation('horizontal', tabs.selected, selectedId);
//     tabs.selected = selectedId;
//     emit('changeFlow', direction);

//     if (selectedId == 0) {
//         router.push({ name: 'sn.teacher.debug.1' });
//     } else {
//         router.push({ name: 'sn.teacher.debug.2' });
//     }
// };
</script>

<style lang="sccs"></style>
