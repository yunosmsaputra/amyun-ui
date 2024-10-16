import type { Meta, StoryObj } from '@storybook/react';

import SwitchButton from './SwitchButton';

const meta = {
  title: 'Form Component / Switch Button',
  component: SwitchButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SwitchButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: false,
  },
};
