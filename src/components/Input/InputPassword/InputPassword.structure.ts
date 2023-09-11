export interface IInputPasswordProps {
  name?: string;
  errorMessage?: string;
  hasError?: boolean;
  isValid?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
