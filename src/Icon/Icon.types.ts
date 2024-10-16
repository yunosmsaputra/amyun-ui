import React, { LegacyRef, useState } from 'react';

export interface IIcon {
  size?: number;
  color?: string;
  name?: string;
  isBox?: boolean;
  boxColor?: string;
  boxSize?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: LegacyRef<HTMLDivElement> | null;
}
