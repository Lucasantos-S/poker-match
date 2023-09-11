export interface IPrimaryButtonProps {
  children: string | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
