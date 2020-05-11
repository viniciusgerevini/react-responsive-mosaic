import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { TouchTransition, MouseTransition } from 'react-dnd-multi-backend';

// HTML5 backend does not work on mobile/touch enabled devices,
// and Touch backend is a little buggy in general.
// Because of that, we need to use multi-backend with this configuration.
export default {
  backends: [
    {
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      backend: TouchBackend,
      options: {enableMouseEvents: true},
      preview: true,
      transition: TouchTransition,
    },
  ],
};
