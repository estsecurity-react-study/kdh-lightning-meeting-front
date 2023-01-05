import 'twin.macro';

import Divider from '../../ui/atoms/Divider';
import SectionTitle from '../../ui/atoms/SectionTitle';
import LoginForm from '../../ui/organisms/AuthForm/LoginForm';
import RegisterForm from '../../ui/organisms/AuthForm/RegisterForm';
import { BaseAuthForm } from '../../ui/organisms/AuthForm/type';
import SocialButtonList from '../../ui/organisms/SocialButtonList';

export interface AuthTemplateProps extends BaseAuthForm {
  type: 'login' | 'register';
}

const AuthTemplate = ({ type, ...rest }: AuthTemplateProps) => {
  return (
    <main tw="min-h-screen text-white text-sm max-w-7xl mx-auto px-4">
      <div>
        <SectionTitle>
          {type === 'login' && '로그인'}
          {type === 'register' && '회원가입'}
        </SectionTitle>
      </div>
      {type === 'login' && (
        <>
          <LoginForm {...rest} />
          <Divider />
          <SocialButtonList />
        </>
      )}
      {type === 'register' && <RegisterForm {...rest} />}
    </main>
  );
};

export default AuthTemplate;
