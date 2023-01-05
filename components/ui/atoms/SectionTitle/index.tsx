import React from 'react';
import tw, { styled } from 'twin.macro';

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: React.ElementType<any>;
}

const SectionTitle = (props: SectionTitleProps) => {
  return <StyledTitle {...props} />;
};

const StyledTitle = styled.h2`
  ${tw`py-4 text-2xl font-semibold`}
`;

export default SectionTitle;
