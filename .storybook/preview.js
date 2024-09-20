/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      controls: {
        exclude: ['style', 'className', 'ref']
      }
    }
  },
  tags: ['autodocs']
};

export default preview;
