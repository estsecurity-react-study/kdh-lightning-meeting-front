import 'twin.macro';

import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import { BaseAuthForm } from '../type';

const RegisterForm = ({ onSubmit, loading, error }: BaseAuthForm) => {
  return (
    <form onSubmit={onSubmit} tw="w-[510px] grid grid-cols-1 gap-y-5">
      <Input
        name="email"
        type="email"
        placeholder="이메일을 입력하세요"
        autoComplete="off"
      />
      <Input
        name="name"
        type="text"
        placeholder="이름을 입력하세요"
        autoComplete="off"
      />
      <Input
        name="password"
        type="password"
        placeholder="패스워드를 입력하세요"
        autoComplete="off"
      />
      <Input
        name="phoneNumber"
        type="text"
        placeholder="전화번호"
        autoComplete="off"
      />
      {error && <span tw="text-red-500">{error}</span>}
      <Button type="submit" disabled={loading}>
        회원가입
      </Button>
    </form>
  );
};

export default RegisterForm;
