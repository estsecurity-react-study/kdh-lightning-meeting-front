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
        tw`flex flex-col items-center flex-1 p-2 text-gray-200 no-underline stroke-1`,
        active && tw`font-extrabold text-white stroke-2`,
      ]}
      {...rest}
    >
      <span>{icon}</span>
      <p>{text}</p>
    </Link>
  );
};

export default NavLink;
