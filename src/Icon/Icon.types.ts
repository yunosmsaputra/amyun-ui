import React, { useState } from 'react';

export interface IIcon {
  size?: number;
  color?: string;
  name?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
