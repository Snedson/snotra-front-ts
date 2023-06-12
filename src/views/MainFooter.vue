<template>
    <foooter>
        <squiggle-divider></squiggle-divider>
        <div class="footer-content">
            <div class="footer-content__left left-content">
                <div class="left-content__about about">
                    <div class="about__logo">
                        <img :src="snotraIcon" />
                        <p><b>Snedson</b> Snotra</p>
                    </div>
                    <p class="about__description">
                        Snotra - школьный агрегатор, собирающий все необходимое
                        для удобной учебы в одном месте: измененное и
                        стандартное расписание уроков и звонков, домашние
                        задания, уведомления и инфорамцию о посещаемости
                        учащихся.
                    </p>
                </div>
                <div class="left-content__links">
                    <p>
                        <a href="#"
                            >Пользовательское соглашение и политика
                            конфиденциальности</a
                        >
                    </p>
                    <p><a href="#">Связь с владельцами проекта</a></p>
                </div>
            </div>
            <div class="footer-content__right"></div>
        </div>
    </foooter>
</template>

<script setup lang="ts">
// import snotraIcon from '@/assets/img/snotraIconSmall.png';
import SquiggleDivider from '@/common/components/snedson-material-components/squiggle-divider/squiggle-divider.vue';
</script>

<style lang="scss" scoped>
.footer-content {
    padding: 40px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__left {
        width: 40%;
        display: flex;
        flex-direction: column;
    }

    &__right {
        margin-top: 15px;
    }
}

.about {
    display: flex;
    flex-direction: column;
    gap: 15px;

    &__logo {
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
        & img {
            width: 50px;
            height: 50px;
            border-radius: 10px;
        }

        & p {
            font-size: 30px;
        }
    }

    &__description {
        font-size: 16px;
    }
}

.left-content {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__links {
        display: flex;
        flex-direction: column;
        gap: 5px;
        & a {
            text-decoration: none;
            font-size: 14px;
        }
    }
}
</style>
