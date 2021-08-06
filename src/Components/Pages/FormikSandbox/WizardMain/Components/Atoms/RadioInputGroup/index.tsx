type RadioInputGroupProps = {
  children: JSX.Element | JSX.Element[];
  touched?: boolean | undefined;
  error?: string | undefined;
};

export const RadioInputGroup = ({
  error,
  touched,
  children,
}: RadioInputGroupProps): JSX.Element => {
  return <div className="grid grid-flow-col gap-2 w-min">{children}</div>;
};
