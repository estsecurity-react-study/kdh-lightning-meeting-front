import React from 'react';
import 'twin.macro';

import Checkbox, { CheckboxProps } from '../../atoms/Checkbox';

export interface LabelCheckboxProps extends CheckboxProps {
  label?: React.ReactNode;
}

const LabelCheckbox = ({ id, label, ...rest }: LabelCheckboxProps) => {
  return (
    <span tw="flex">
      <Checkbox id={id} {...rest} />
      <label htmlFor={id} tw="pl-2 select-none cursor-pointer">
        {label}
      </label>
    </span>
  );
};

export default LabelCheckbox;
