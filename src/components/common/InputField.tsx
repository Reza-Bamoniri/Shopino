type InputFieldProps = {
     label: string
     fullWidth?: boolean
     type?: string
     placeholder: string
     onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
     name: string
     value: string
     maxLength?: number
     inputMode?: "search" | "text" | "numeric" | "email" | "tel" | "url" | "none" | "decimal"
    }

const InputField = ({ label, fullWidth, type, placeholder, onChange, name, value, maxLength, inputMode  }: InputFieldProps) => {

    const cardClassName = "*:block w-full space-y-2.5 ".concat(
    fullWidth ? "col-span-2" : "",
  );
  const uniqueID = crypto.randomUUID();

  return (
    <div className={cardClassName}>
      <label
        htmlFor={uniqueID}
        className="text-xs select-none text-neutral-500"
      >
        {label}:
      </label>
      <input
        type={type}
        placeholder={
          placeholder ? placeholder : "Please complete this field."
        }
        id={uniqueID}
        onChange={onChange}
        value={value}
        name={name}
        maxLength={maxLength}
        inputMode={inputMode}
        className="contact-input-field"
      />
    </div>
  )
}

export default InputField