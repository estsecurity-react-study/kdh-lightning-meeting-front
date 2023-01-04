import { FormEventHandler } from 'react';

export interface BaseAuthForm {
  onSubmit: FormEventHandler;
  loading?: boolean;
  error?: string | null;
}
