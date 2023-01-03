import React from 'react';
import tw, { styled } from 'twin.macro';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button`
  ${tw`h-16 px-5 bg-green-500`}
  ${tw`border border-green-600`}
  ${tw`font-bold leading-4 prose-xl text-white`}
  ${tw`disabled:(opacity-30 cursor-not-allowed)`}
`;

export default Button;
