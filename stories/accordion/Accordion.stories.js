import { createAccordion } from './Accordion';

export default {
  title: 'Example/Accordion',
  parameters: {

  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => createAccordion(args);

export const Primary = Template.bind({});
Primary.args = {
  size: 'large',
  label: 'Button',
};
