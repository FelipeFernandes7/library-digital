/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { ErrorMessage } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
}

export function Input({
  register,
  label,
  name,
  type,
  error,
  ...rest
}: InputProps) {
  let registers = register(name)
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {registers && name ? (
        <input
          {...rest}
          style={{
            width: "100",
            border: error ? "1px solid #AF1919" : "1px solid #7d5fff",
          }}
          type={type}
          {...(label ? { id: name } : {})}
          {...register(name, type === "number" ? { valueAsNumber: true } : {})}
        />
      ) : (
        <input
          {...rest}
          style={{
            width: "100",
            border: error ? "1px solid #AF1919" : "1px solid #7d5fff",
          }}
          type={type}
          {...(label ? { id: name } : {})}
          {...rest}
        />
      )}
      {!!error && (
        <ErrorMessage>
          <p>{error.message}</p>
        </ErrorMessage>
      )}
    </div>
  );
}
