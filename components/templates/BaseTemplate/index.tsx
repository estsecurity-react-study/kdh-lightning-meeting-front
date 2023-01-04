import React from 'react';
import 'twin.macro';

import PortalNavbar from '../../ui/organisms/PortalNavbar';

export type BaseTemplateProps = React.PropsWithChildren;

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <>
      <main tw="min-h-screen text-white text-sm max-w-7xl mx-auto px-4">
        {children}
        <div tw="h-16" />
      </main>
      <div id="portal-root" tw="text-white text-sm">
        <PortalNavbar />
      </div>
    </>
  );
};

export default BaseTemplate;
