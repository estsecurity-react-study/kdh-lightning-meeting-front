import React from 'react';
import tw, { styled } from 'twin.macro';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  ${tw`h-16`}
  ${tw`border border-slate-300 outline-green-500`}
  ${tw`px-5 leading-4 prose prose-lg`}
`;

export default Input;
