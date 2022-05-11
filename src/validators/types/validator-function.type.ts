export type ValidatorFn<T> = (
  value?: T,
  args?: any
) => boolean;
