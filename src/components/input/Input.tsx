import IInputProps from "../../interfaces/IInputProps"; 
import styles from "./Input.module.scss";

function Input({id, name,  value = "",  disabled, dimensions, inputMode, required, label , type, register, validation, errorText, className}: IInputProps) {
    
  let divClassNames = styles.own_div;
  if (dimensions === "small") {
    divClassNames = `${styles.own_div} ${styles.small_input}`;
  }

  if (disabled) {
    divClassNames = `${divClassNames} ${styles.disabled_class}`;
  }

  return (
    <div className={`${className ?? ""} ${divClassNames}`}>  
    {!!errorText && !disabled ? (
        <span className={styles.error}>{errorText}</span>
      ) : null}
    {register ? (
        <input
          {...register(name, { ...validation, disabled: disabled })}
          readOnly={disabled}
          className={styles.input}
          placeholder={label}
          inputMode={inputMode ?? "text"}
          type={type ?? "text"}
        />
      ) : (
        <input 
          id={id}
          name={name}
          className={styles.input}
          required={required}
          disabled={disabled}
          placeholder={label}
          defaultValue={value}
          type={type ?? "text"}
        />
      )}
      <div className={styles.border}></div>
      <label className={styles.label_text}>
        {label}&nbsp;{required && <span className={styles.required}>*</span>}
      </label> 
    </div>
  );
}

export default Input;