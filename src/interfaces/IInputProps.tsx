export default interface IInputProps {
  id?: string;
  onChange?: (str: string) => void; 
  name?: string;  
  register?: any;
  validation? : any,
  required?: boolean;
  icon?: string;
  errorText?: string;
  helperText?: string;
  className?: string;
  label: string;
  value?: string;
  inputMode?: "search" | "text" | "password" | "tel" | "url" | "email" | "numeric" | "decimal";
  type?: string;
  disabled?: boolean;
  dimensions?: string;
};

