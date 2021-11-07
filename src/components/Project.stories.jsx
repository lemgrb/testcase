import React from 'react';
import Project from './Project';

export default {
  title: 'TestCase/Project',
  component: Project,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Project {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Hello',
  description: 'World',
};
