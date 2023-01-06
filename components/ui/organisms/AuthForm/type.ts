import { FieldValues, SubmitHandler } from 'react-hook-form';

export interface AuthFormType<T extends FieldValues> {
  onSubmit?: SubmitHandler<T>;
  loading?: boolean;
  error?: T | string | null;
}
