/** @type { import('@storybook/react').Preview } */
import "bootstrap/dist/css/bootstrap.min.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
