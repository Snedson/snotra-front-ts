import DataTag from './data-tag.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Snedson Material Components/Data Tag',
  component: DataTag,
  argTypes: {},
} as Meta<typeof DataTag>;

const Template: StoryFn<typeof DataTag> = (args: any) => ({
  components: { DataTag },
  setup() {
    return { args };
  },
  template: '<data-tag v-bind="args" />',
});

export const Default: StoryFn<typeof DataTag> = Template.bind({});

Default.args = {};
