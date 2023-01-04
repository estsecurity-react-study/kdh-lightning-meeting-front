import 'twin.macro';

import PortalNavbar from '../../ui/organisms/PortalNavbar';

const BaseTemplate = () => {
  return (
    <>
      <main tw="min-h-screen"></main>
      <div id="portal-root">
        <PortalNavbar />
      </div>
    </>
  );
};

export default BaseTemplate;
