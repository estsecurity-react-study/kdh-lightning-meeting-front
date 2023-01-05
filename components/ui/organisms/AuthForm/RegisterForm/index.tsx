import { useForm } from 'react-hook-form';
import 'twin.macro';

import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import { BaseAuthForm } from '../type';

export interface RegisterInputs {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phoneNumber: string;
}

export type LoginFormProps = BaseAuthForm<RegisterInputs>;

const RegisterForm = ({ onSubmit, loading, error }: LoginFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  return (
    <form
      onSubmit={onSubmit && handleSubmit(onSubmit)}
      tw="grid grid-cols-1 gap-y-5"
    >
      <div tw="flex flex-col gap-y-2">
        <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          autoComplete="off"
          {...register('email', {
            required: '필수 응답 항목입니다',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '이메일 형식이 아닙니다.',
            },
          })}
        />
        {errors?.email && (
          <span tw="text-red-500 text-sm font-bold pl-2">
            {errors.email.message}
          </span>
        )}
      </div>

      <div tw="flex flex-col gap-y-2">
        <Input
          type="password"
          placeholder="패스워드를 입력해주세요"
          autoComplete="off"
          {...register('password', {
            required: '필수 응답 항목입니다',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다',
            },
            maxLength: {
              value: 24,
              message: '비밀번호는 24자 이하여야 합니다',
            },
          })}
        />
        {errors?.password && (
          <span tw="text-red-500 text-sm font-bold pl-2">
            {errors.password.message}
          </span>
        )}
      </div>

      <div tw="flex flex-col gap-y-2">
        <Input
          type="password"
          placeholder="패스워드를 다시 입력해주세요"
          autoComplete="off"
          {...register('passwordConfirm', {
            required: '필수 응답 항목입니다',
            validate: (value: string) => {
              if (watch('password') !== value) {
                return '패스워드가 일치하지 않습니다';
              }
            },
          })}
        />
        {errors?.passwordConfirm && (
          <span tw="text-red-500 text-sm font-bold pl-2">
            {errors.passwordConfirm.message}
          </span>
        )}
      </div>

      <div tw="flex flex-col gap-y-2">
        <Input
          type="text"
          placeholder="이름을 입력해주세요"
          autoComplete="off"
          {...register('name', {
            required: '필수 응답 항목입니다',
          })}
        />
        {errors?.name && (
          <span tw="text-red-500 text-sm font-bold pl-2">
            {errors.name.message}
          </span>
        )}
      </div>

      <div tw="flex flex-col gap-y-2">
        <Input
          type="text"
          placeholder="전화번호를 입력해주세요"
          autoComplete="off"
          {...register('phoneNumber', {
            required: '필수 응답 항목입니다',
          })}
        />
        {errors?.phoneNumber && (
          <span tw="text-red-500 text-sm font-bold pl-2">
            {errors.phoneNumber.message}
          </span>
        )}
      </div>

      {error && <span tw="text-red-500 text-sm font-bold pl-2">{error}</span>}
      <Button type="submit" disabled={loading}>
        회원가입
      </Button>
    </form>
  );
};

export default RegisterForm;
