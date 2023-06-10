import cx from "classnames";
import { InputHTMLAttributes, ReactElement, forwardRef, useId } from "react";

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "placeholder"
> & {
  label?: string | ReactElement;
  color?: TextInputColor;
  errorMessage?: string;
  errorMessageLine?: boolean;
  labelAlwaysOnTop?: boolean;
  type?: "text" | "email";
};

export enum TextInputColor {
  Red = "red",
  Green = "green",
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      color,
      errorMessage,
      errorMessageLine = true,
      labelAlwaysOnTop = false,
      type = "text",
      id,
      ...inputProps
    },
    ref
  ) => {
    const uniqueId = useId();
    const inputId = id && uniqueId;

    if (errorMessage && color !== TextInputColor.Red) {
      console.warn(
        "TextInput: errorMessage and color are set. This will not work."
      );
    }

    if (errorMessage && !errorMessageLine) {
      console.warn(
        "TextInput: errorMessageLine is false, but errorMessage is set. This will not work."
      );
    }

    return (
      <div className={cx("relative mt-3", className)}>
        <input
          className={cx(
            "input inputBorder peer rounded px-3 py-2 disabled:border-0 disabled:bg-gray-200",
            {
              labelAlwaysOnTop,
              "border-red-500 focus:outline-red-500":
                !!errorMessage || color === TextInputColor.Red,
              "border-green-500 focus:outline-green-500":
                !errorMessage && color === TextInputColor.Green,
            }
          )}
          id={inputId}
          type={type}
          placeholder=" "
          ref={ref}
          {...inputProps}
        />
        {label && (
          <label
            className={cx(
              "absolute left-3 top-2 origin-left bg-white px-1 text-gray-500 transition duration-100",
              {
                "peer-focus:text-red-500":
                  !!errorMessage || color === TextInputColor.Red,
                "peer-focus:text-green-500":
                  !errorMessage && color === TextInputColor.Green,
              }
            )}
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        {errorMessageLine && <div className="errorMessage">{errorMessage}</div>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
