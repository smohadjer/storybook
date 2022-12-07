import './accordion.scss';
import Accordion from './AccordionClass.js';

export const createAccordion = ({}) => {
  const details = document.createElement('details');
  details.className = 'accordion';
  const markup = `<summary>Lorem ipsum dolor sit</summary>
  <div class="accordion__content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, necessitatibus hic earum ipsum labore tempore nisi ipsa dicta est, modi, ipsam officia rerum? Nulla exercitationem molestiae, nesciunt ducimus possimus necessitatibus.</p>
    <p>Ipsa dicta est, modi, ipsam officia rerum? Nulla exercitationem molestiae, nesciunt ducimus possimus necessitatibus.</p>
  </div>`

  details.insertAdjacentHTML('afterbegin', markup);
  new Accordion(details);
  return details;
};
