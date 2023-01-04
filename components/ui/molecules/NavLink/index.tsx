import Link, { LinkProps } from 'next/link';
import React from 'react';
import tw from 'twin.macro';

export interface NavLinkProps extends LinkProps {
  active?: boolean;
  icon?: React.ReactElement;
  text: string;
}

const NavLink = ({ href, active, icon, text, ...rest }: NavLinkProps) => {
  return (
    <Link
      href={href}
      css={[
        tw`flex flex-col items-center flex-1 p-2 prose stroke-1 prose-invert prose-p:prose-sm prose-p:m-0`,
        active && tw`font-extrabold stroke-2`,
      ]}
      {...rest}
    >
      <span>{icon}</span>
      <p>{text}</p>
    </Link>
  );
};

export default NavLink;
