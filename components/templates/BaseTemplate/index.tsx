import React from 'react';
import 'twin.macro';

import PortalNavbar from '../../ui/organisms/PortalNavbar';

export type BaseTemplateProps = React.PropsWithChildren;

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <>
      <main tw="min-h-screen prose prose-invert">{children}</main>
      <div
        id="portal-root"
        tw="prose prose-invert prose-p:prose-sm prose-p:m-0"
      >
        <PortalNavbar />
      </div>
    </>
  );
};

export default BaseTemplate;
