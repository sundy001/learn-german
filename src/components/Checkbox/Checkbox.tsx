import { ChangeEventHandler, HTMLProps } from "react";

type Props = {
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & Omit<HTMLProps<HTMLInputElement>, "type" | "onChange">;

export const Checkbox = ({ label, ...props }: Props) => {
  return (
    <label>
      {label}
      <input className="ml-1" type="checkbox" {...props} />
    </label>
  );
};
