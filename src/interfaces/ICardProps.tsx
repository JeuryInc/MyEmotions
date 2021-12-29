import { ReactChild, ReactChildren } from "react";

export default interface ICardProps { 
    color?: string; 
    boxShadow?: boolean;
    borderType?: number;
    className?: string;
    onClick?: () => void;
    children?: ReactChild | ReactChildren;
}
 