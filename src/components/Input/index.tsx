import React, { useId } from "react";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "password";
  required?: boolean;
};

function Input({ label, name, placeholder, required, type }: Props) {
  const id = useId();

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-foreground"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
        required={required}
      />
    </>
  );
}

export default Input;
