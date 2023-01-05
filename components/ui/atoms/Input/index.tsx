import React from 'react';
import tw, { styled } from 'twin.macro';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  ${tw`h-12 bg-black placeholder:text-white/50`}
  ${tw`outline-none border-2 border-slate-800 focus:(border-slate-500)`}
  ${tw`px-4 text-base leading-4`}
`;

export default Input;
