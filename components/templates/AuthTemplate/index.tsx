import Link from 'next/link';
import tw from 'twin.macro';

import Divider from '../../ui/atoms/Divider';
import SectionTitle from '../../ui/atoms/SectionTitle';
import LoginForm, { LoginInputs } from '../../ui/organisms/AuthForm/LoginForm';
import RegisterForm, {
  RegisterInputs,
} from '../../ui/organisms/AuthForm/RegisterForm';
import { AuthFormType } from '../../ui/organisms/AuthForm/type';
import SocialButtonList from '../../ui/organisms/SocialButtonList';

export type AuthTemplateProps =
  | ({ type: 'login' } & AuthFormType<LoginInputs>)
  | ({ type: 'register' } & AuthFormType<RegisterInputs>);

const AuthTemplate = ({ type, ...rest }: AuthTemplateProps) => {
  return (
    <main
      css={[
        tw`max-w-2xl min-h-screen px-4 mx-auto`,
        tw`flex flex-col justify-center`,
        tw`text-sm text-white`,
      ]}
    >
      {/* 타이틀 영역 */}
      <SectionTitle>
        {type === 'login' && '로그인'}
        {type === 'register' && '회원가입'}
      </SectionTitle>

      {/* 컨텐츠 영역 */}
      {type === 'login' && (
        <>
          <LoginForm {...(rest as any)} />
          <Divider />
          <SocialButtonList />
        </>
      )}
      {type === 'register' && <RegisterForm {...(rest as any)} />}

      {/* 연결 링크 영역 */}
      <div tw="flex flex-row gap-x-2 justify-center mt-8 items-center">
        <span tw="text-slate-300 text-sm">
          {type === 'login' && '아직 회원이 아니신가요?'}
          {type === 'register' && '이미 계정이 있으신가요?'}
        </span>
        <Link
          href={type === 'login' ? '/auth/signup' : '/auth/signin'}
          tw="text-green-500 underline underline-offset-2 font-extrabold text-base"
        >
          {type === 'login' && '회원가입'}
          {type === 'register' && '로그인'}
        </Link>
      </div>
    </main>
  );
};

export default AuthTemplate;
