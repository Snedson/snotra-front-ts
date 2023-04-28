import OnAir from './on-air.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Snedson Material Components/On Air',
  component: OnAir,
  argTypes: {},
} as Meta<typeof OnAir>;

const Template: StoryFn<typeof OnAir> = (args: any) => ({
  components: { OnAir },
  setup() {
    return { args };
  },
  template: '<on-air v-bind="args" />',
});

export const Default: StoryFn<typeof OnAir> = Template.bind({});

Default.args = {};
