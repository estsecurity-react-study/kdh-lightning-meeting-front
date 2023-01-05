import 'twin.macro';

import SocialButton from '../../molecules/SocialButton/index.tsx';

const SocialButtonList = () => {
  return (
    <div tw="flex flex-col gap-y-2">
      <a href="http://localhost:8000/api/auth/google/login">
        <SocialButton provider="google" text="Google 로그인" />
      </a>
    </div>
  );
};

export default SocialButtonList;
