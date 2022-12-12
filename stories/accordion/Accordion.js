import './accordion.scss';
import Accordion from './AccordionClass.js';

export const createAccordion = ({
  label,
  content,
  open = false,
}) => {
  const details = document.createElement('details');
  details.className = 'accordion';
  if (open) {
    details.setAttribute('open', 'open');
  }
  const markup = `<summary>${label}</summary>
    <div class="accordion__content">
      ${content}
    </div>`
  details.insertAdjacentHTML('afterbegin', markup);
  new Accordion(details);
  return details;
};
