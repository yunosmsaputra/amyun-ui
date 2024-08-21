import type { Meta, StoryObj } from '@storybook/react';

import { ButtonComponent } from './index';
import { AmFlex, AmIcon, AmText } from '../index';
import React from 'react';
import { blueColorLib } from '../color';

const meta = {
  title: 'Form Component/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['fill', 'ghost', 'nude'],
      description: 'Type Button',
    },
    color: {
      control: 'radio',
      options: ['blue', 'red', 'green', 'yellow'],
      description: 'Color Button',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size button',
    },
    onClick: {
      action: 'clicked',
      description: 'Function when button clicked',
    },
    prependIcon: {
      description: 'Use if want add prepend icon (use icon from Icon List)',
      control: 'text',
      name: 'Prepend Icon',
    },
    appendIcon: {
      description: 'Use if want add append icon (use icon from Icon List)',
      control: 'text',
      name: 'Append Icon',
    },
    iconColor: {
      description:
        'Define color of Prepend / Append Icon (only use with Prepend and Append Icon)',
      control: 'color',
      name: 'Icon Color',
    },
    iconSize: {
      description:
        'Define size of Prepend / Append Icon (only use with Prepend and Append Icon)',
      control: 'number',
      name: 'Icon Size',
    },
    style: {
      table: { disable: true },
    },
    btnIcon: {
      description:
        'Set for use Button type icon <br/>just write name icon base on AmIcon Component',
    },
    popup: {
      description: 'Set <b>True</b> if want use button with popup',
    },
    popupPosition: {
      description: 'Position popup - float by button position',
      control: 'radio',
      options: ['left', 'right'],
    },
    popupWidth: {
      description:
        'Define if want to custom width of popup button container<br/>Set by default by width of button',
    },
    popupActionList: {
      description:
        'Popup list actions button<br/>Use Component to list action popup button',
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Save',
    type: 'fill',
    color: 'blue',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    prependIcon: 'plus',
    iconColor: '#FFF',
    iconSize: 14,
  },
};

export const IconButton: Story = {
  args: {
    btnIcon: 'three-dot',
    iconColor: '#9C9C9C',
    iconSize: 12,
  },
};

export const WithPopup: Story = {
  args: {
    type: 'fill',
    color: 'blue',
    children: [
      <AmText weight={'semibold'} color={'#FFF'} key={`text`}>
        Button Popup
      </AmText>,
    ],
    appendIcon: 'plus',
    popup: true,
    popupActionList: [
      <AmFlex
        justifyContent={'space-between'}
        alignItems={'center'}
        onClick={() => {
          console.log('Popup 1');
        }}
      >
        <AmText size={12}>Popup 1</AmText>
        <AmIcon size={12} color={blueColorLib.main} name="plus"></AmIcon>
      </AmFlex>,
      <AmFlex
        justifyContent={'space-between'}
        alignItems={'center'}
        onClick={() => {
          console.log('Popup 2');
        }}
      >
        <AmText size={12}>Popup 2</AmText>
        <AmIcon size={12} color={blueColorLib.main} name="plus"></AmIcon>
      </AmFlex>,
    ],
    popupWidth: 200,
    popupPosition: 'left',
  },
};
