export default interface IInputProps {
  id?: string;
  onChange?: (str: string) => void; 
  name?: string;  
  register?: any;
  validation? : any,
  required?: boolean;
  icon?: string;
  divClassName?: string;
  errorText?: string;
  helperText?: string;
  label: string;
  value?: string;
  inputMode?: "search" | "text" | "password" | "tel" | "url" | "email" | "numeric" | "decimal";
  type?: string;
  disabled?: boolean;
  dimensions?: string;
};

