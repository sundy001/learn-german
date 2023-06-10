import { forwardRef, InputHTMLAttributes, ReactElement, useId } from "react";
import cx from "classnames";

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
            "peer input inputBorder rounded py-2 px-3 disabled:border-0 disabled:bg-gray-200",
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
              "absolute px-1 text-gray-500 top-2 left-3 bg-white transition duration-100 origin-left",
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