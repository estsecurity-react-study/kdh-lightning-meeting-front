import React from 'react';
import tw, { styled } from 'twin.macro';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button`
  ${tw`h-12 px-4 bg-green-500`}
  ${tw`border border-green-600`}
  ${tw`text-lg font-bold leading-4 text-white`}
  ${tw`disabled:(opacity-30 cursor-not-allowed)`}
`;

export default Button;
