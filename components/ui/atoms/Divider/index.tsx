import React from 'react';
import tw, { styled } from 'twin.macro';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'vertical' | 'horizontal';
}

const Divider = ({ type = 'horizontal', ...rest }: DividerProps) => {
  return (
    <StyledDivider
      type={type}
      style={{
        width: type === 'horizontal' ? 'auto' : '1px',
        height: type === 'horizontal' ? '1px' : 'auto',
      }}
      {...rest}
    />
  );
};

const StyledDivider = styled.div<DividerProps>(({ type }) => [
  tw`bg-gray-700`,
  type === 'horizontal' && tw`my-6`,
  type === 'vertical' && tw`mx-2`,
]);

export default Divider;
