<template>
    <div class="squiggle-wrapper">
        <svg class="squiggle" xmlns="http://www.w3.org/2000/svg">
            <pattern
                class="squiggle__pattern svg-pattern"
                id="a"
                width="91"
                height="8"
                patternUnits="userSpaceOnUse"
            >
                <g class="svg-pattern__g">
                    <path
                        class="svg-pattern__path"
                        d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                    ></path>
                </g>
            </pattern>
            <rect class="squiggle__rect"></rect>
        </svg>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.squiggle {
    &-wrapper {
        position: relative;
        width: 100%;
        height: 8px;
        color: #1f1f1f;
        vertical-align: baseline;
    }

    position: absolute;
    color: #1f1f1f;
    width: 100%;
    height: 8px;
    fill: none;

    &__rect {
        width: 100%;
        height: 100%;
        fill: url('#a');
    }
}

.svg-pattern {
    color: #1f1f1f;
    stroke: var(--snotra--sys--on-surface-second-text);
    &__path {
        color: #1f1f1f;
        stroke-linecap: square;
        stroke: var(--snotra--sys--on-surface-second-text);
    }
}
</style>
