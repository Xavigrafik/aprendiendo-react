import { ReactNode } from 'react';

import styles from "./Button.module.scss";

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
    classProps?: string;
    sent?: boolean;
};

function Button({ children, isLoading, onClick, classProps = '', sent }: Props) {
    
    let content;

    const isLoadingClass = `btn btn-${isLoading ? 'secondary LOADING' : 'primary'}`;
    const className = ` ${isLoadingClass} ${classProps} ${styles.claseDesdeModule} `

    if (isLoading) {
        content = "Cargando...";
    } else if (sent) {
        content = "Enviado!";
    } else {
        content = children;
    }
    

    return (
        <button
            disabled={isLoading}
            onClick={onClick}
            type="button"
            className={className}
        >
           {content}
        </button>
    );
}

export default Button;
