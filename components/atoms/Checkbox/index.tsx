import React from 'react';
import tw, { styled } from 'twin.macro';

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
>;

const Checkbox = (props: CheckboxProps) => {
  return <StyledInput type="checkbox" {...props} />;
};

const StyledInput = styled.input`
  appearance: none;
  ${tw`w-6 h-6 border rounded border-slate-300`}
  ${tw`cursor-pointer`}

  &:checked {
    ${tw`bg-transparent bg-green-500 border-green-600`}
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

export default Checkbox;
