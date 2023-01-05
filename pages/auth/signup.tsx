import { FormEvent } from 'react';

import AuthTemplate from '../../components/templates/AuthTemplate';

const SignInPage = () => {
  return (
    <AuthTemplate
      type="register"
      onSubmit={(event: FormEvent<Element>) => {
        console.log(event);
      }}
    />
  );
};

export default SignInPage;
