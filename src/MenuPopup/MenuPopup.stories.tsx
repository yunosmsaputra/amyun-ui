import type { Meta, StoryObj } from '@storybook/react';

import MenuPopup, {
  AmMenuPopupActivator,
  AmMenuPopupContent,
} from './MenuPopup';
import React from 'react';
import { AmBox } from '../index';
import { ButtonComponent } from '../Button';
import TextComponent from '../Text/Text';

const meta = {
  title: 'Layout/Menu Popup',
  component: MenuPopup,
  parameters: {
    docs: {
      description: {
        component: `Set <b>content width</b> with use <i>width</i> props in <i>AmMenuPopupContent</i><br/>Set <b>Position</b> of content menu with props <i>top/bottom/left/right</i> and don't use top and bottom / left and right in same time)`,
      },
    },
  },
} satisfies Meta<typeof MenuPopup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <AmMenuPopupActivator>
        <ButtonComponent color={'blue'} type={'fill'}>
          Click Me
        </ButtonComponent>
      </AmMenuPopupActivator>,
      <AmMenuPopupContent width={'200px'} top={'40px'}>
        <AmBox style={{ padding: '8px 12px' }}>
          <TextComponent>Menu Popup Content</TextComponent>
          <TextComponent>Menu Popup Content</TextComponent>
        </AmBox>
      </AmMenuPopupContent>,
    ],
  },
};
