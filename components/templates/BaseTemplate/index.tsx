import React from 'react';
import 'twin.macro';

import PortalNavbar from '../../ui/organisms/PortalNavbar';

export type BaseTemplateProps = React.PropsWithChildren;

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <>
      <main tw="min-h-screen">{children}</main>
      <div id="portal-root">
        <PortalNavbar />
      </div>
    </>
  );
};

export default BaseTemplate;
