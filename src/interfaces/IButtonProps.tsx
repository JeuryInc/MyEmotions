export default interface IButtonProps { 
    id?: string; 
    isLoading?: boolean;
    onClicked?: () => void;
    disabled?: boolean;
    size?: number;
    className?: string;
    type?: number;    
    btnType?: "button" | "submit" | "reset";
    text?: string; 
}
 