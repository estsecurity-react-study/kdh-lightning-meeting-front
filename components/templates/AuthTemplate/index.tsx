import 'twin.macro';

import LoginForm from '../../organisms/AuthForm/LoginForm';
import RegisterForm from '../../organisms/AuthForm/RegisterForm';
import { BaseAuthForm } from '../../organisms/AuthForm/type';

export interface AuthTemplateProps extends BaseAuthForm {
  type: 'login' | 'register';
}

const AuthTemplate = ({ type, ...rest }: AuthTemplateProps) => {
  return (
    <main tw="w-screen h-screen grid place-items-center">
      {type === 'login' && <LoginForm {...rest} />}
      {type === 'register' && <RegisterForm {...rest} />}
    </main>
  );
};

export default AuthTemplate;
