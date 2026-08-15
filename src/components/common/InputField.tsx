type InputFieldProps = {
     label: string
     fullWidth?: boolean
     type?: string
     placeholder: string
     onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    }

const InputField = ({ label, fullWidth, type, placeholder, onChange  }: InputFieldProps) => {

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
          placeholder ? placeholder : "لطفا این فیلد را تکمیل بفرمایید."
        }
        id={uniqueID}
        onChange={onChange}
        className="contact-input-field"
      />
    </div>
  )
}

export default InputField