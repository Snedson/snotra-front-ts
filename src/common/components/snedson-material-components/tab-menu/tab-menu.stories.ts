import TabMenu from './tab-menu.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Snedson Material Components/Tab Menu',
  component: TabMenu,
  argTypes: {},
} as Meta<typeof TabMenu>;

const Template: StoryFn<typeof TabMenu> = (args: any) => ({
  components: { TabMenu },
  setup() {
    return { args };
  },
  template: '<tab-menu v-bind="args"/>',
});

export const Default: StoryFn<typeof TabMenu> = Template.bind({});

Default.args = {
  tabs: [
    { title: 'Hello', id: 0 },
    { title: 'World', id: 1 },
  ],
  selectedTabItemId: 0,
};
