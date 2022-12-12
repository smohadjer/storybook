import { createAccordion } from './Accordion';

export default {
  title: 'Example/Accordion',
  parameters: {

  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

const Template = (args) => createAccordion(args);

export const Default = Template.bind({});
Default.args = {
  open: false,
  label: 'Hello World',
  content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus hic earum ipsum labore tempore nisi ipsa dicta est, modi, ipsam officia rerum? Nulla exercitationem molestiae, nesciunt ducimus possimus necessitatibus.</p>
  <p>Ipsa dicta est, modi, ipsam officia rerum? Nulla exercitationem molestiae, nesciunt ducimus possimus necessitatibus.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus hic earum ipsum labore tempore nisi ipsa dicta est, modi, ipsam officia rerum? Nulla exercitationem molestiae, nesciunt ducimus possimus necessitatibus.</p>`
};

export const accordionOpen = Template.bind({});
accordionOpen.args = {
  open: true,
  label: 'Accordion is initially open',
  content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus hic earum ipsum labore tempore nisi ipsa dicta est, modi, ipsam officia rerum? Nulla exercitationem molestiae, nesciunt ducimus possimus necessitatibus.</p>
  <p>Ipsa dicta est, modi, ipsam officia rerum? Nulla exercitationem molestiae, nesciunt ducimus possimus necessitatibus.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus hic earum ipsum labore tempore nisi ipsa dicta est, modi, ipsam officia rerum? Nulla exercitationem molestiae, nesciunt ducimus possimus necessitatibus.</p>`
};
