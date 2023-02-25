import NavigationItem from './navigation-item.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
    title: 'Snedson Material Components/Navigation Item',
    component: NavigationItem,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        selected: { control: 'boolean' },
    },
} as Meta<typeof NavigationItem>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof NavigationItem> = (args: any) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { NavigationItem },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<NavigationItem v-bind="args" />',
});

export const Unselected: StoryFn<typeof NavigationItem> = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Unselected.args = {
    iconName: 'home', 
    title: 'Главная страница', 
    selected: false,
};

export const Selected: StoryFn<typeof NavigationItem> = Template.bind({});
Selected.args = {
    iconName: 'home', 
    title: 'Главная страница', 
    selected: true,
};
