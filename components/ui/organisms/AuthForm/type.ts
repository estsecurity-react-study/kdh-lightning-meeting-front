import { FieldValues, SubmitHandler } from 'react-hook-form';

export interface BaseAuthForm<T extends FieldValues> {
  onSubmit?: SubmitHandler<T>;
  loading?: boolean;
  error?: string | null;
}
