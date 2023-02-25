import FloatingActionButton from './floating-action-button.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
    title: 'Snedson Material Components/FAB - Floating Action Button',
    component: FloatingActionButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['default', 'small', 'large'],
        },
        containerColor: { control: 'color' },
        iconColor: { control: 'color' },
        shadowed: { control: 'boolean' },
    },
} as Meta<typeof FloatingActionButton>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof FloatingActionButton> = (args: any) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { FloatingActionButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<FloatingActionButton v-bind="args" />',
});

export const LargePrimary: StoryFn<typeof FloatingActionButton> = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
LargePrimary.args = {
    size: 'large', 
    containerColor: 'var(--snotra--sys--primary-container)', 
    iconColor: 'var(--snotra--sys--on-primary-container)', 
    iconName: 'add', 
    shadowed: true
};

export const LargeSurface: StoryFn<typeof FloatingActionButton> = Template.bind({});
LargeSurface.args = {
    size: 'large', 
    containerColor: 'var(--snotra--sys--surface)', 
    iconColor: 'var(--snotra--sys--primary)', 
    iconName: 'add', 
    shadowed: true
};

export const LargeSecondary: StoryFn<typeof FloatingActionButton> = Template.bind({});
LargeSecondary.args = {
    size: 'large', 
    containerColor: 'var(--snotra--sys--secondary-container)', 
    iconColor: 'var(--snotra--sys--on-secondary-container)', 
    iconName: 'add', 
    shadowed: true
};

export const LargeTertiary: StoryFn<typeof FloatingActionButton> = Template.bind({});
LargeTertiary.args = {
    size: 'large', 
    containerColor: 'var(--snotra--sys--tertiary-container)', 
    iconColor: 'var(--snotra--sys--on-tertiary-container)', 
    iconName: 'add', 
    shadowed: false
};

export const DefaultPrimary: StoryFn<typeof FloatingActionButton> = Template.bind({});
DefaultPrimary.args = {
    size: 'default', 
    containerColor: 'var(--snotra--sys--primary-container)', 
    iconColor: 'var(--snotra--sys--on-primary-container)', 
    iconName: 'add', 
    shadowed: true
};

export const DefaultSurface: StoryFn<typeof FloatingActionButton> = Template.bind({});
DefaultSurface.args = {
    size: 'default', 
    containerColor: 'var(--snotra--sys--surface)', 
    iconColor: 'var(--snotra--sys--primary)', 
    iconName: 'add', 
    shadowed: true
};

export const DefaultSecondary: StoryFn<typeof FloatingActionButton> = Template.bind({});
DefaultSecondary.args = {
    size: 'default', 
    containerColor: 'var(--snotra--sys--secondary-container)', 
    iconColor: 'var(--snotra--sys--on-secondary-container)', 
    iconName: 'add', 
    shadowed: true
};

export const DefaultTertiary: StoryFn<typeof FloatingActionButton> = Template.bind({});
DefaultTertiary.args = {
    size: 'default', 
    containerColor: 'var(--snotra--sys--tertiary-container)', 
    iconColor: 'var(--snotra--sys--on-tertiary-container)', 
    iconName: 'add', 
    shadowed: false
};

export const SmallPrimary: StoryFn<typeof FloatingActionButton> = Template.bind({});
SmallPrimary.args = {
    size: 'small', 
    containerColor: 'var(--snotra--sys--primary-container)', 
    iconColor: 'var(--snotra--sys--on-primary-container)', 
    iconName: 'add', 
    shadowed: true
};

export const SmallSurface: StoryFn<typeof FloatingActionButton> = Template.bind({});
SmallSurface.args = {
    size: 'small', 
    containerColor: 'var(--snotra--sys--surface)', 
    iconColor: 'var(--snotra--sys--primary)', 
    iconName: 'add', 
    shadowed: true
};

export const SmallSecondary: StoryFn<typeof FloatingActionButton> = Template.bind({});
SmallSecondary.args = {
    size: 'small', 
    containerColor: 'var(--snotra--sys--secondary-container)', 
    iconColor: 'var(--snotra--sys--on-secondary-container)', 
    iconName: 'add', 
    shadowed: true
};

export const SmallTertiary: StoryFn<typeof FloatingActionButton> = Template.bind({});
SmallTertiary.args = {
    size: 'small', 
    containerColor: 'var(--snotra--sys--tertiary-container)', 
    iconColor: 'var(--snotra--sys--on-tertiary-container)', 
    iconName: 'add', 
    shadowed: false
};