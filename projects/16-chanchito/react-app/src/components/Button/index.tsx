import { ReactNode } from 'react';

import styles from "./Button.module.scss";

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
    className?: string;
    sent?: boolean;
};

function Button({ children, isLoading, onClick, className = '', sent }: Props) {
    
    let content;

    const isLoadingClass = `btn btn-${isLoading ? 'secondary LOADING' : 'primary'}`;
    const classProps = `${isLoadingClass} ${className} ${styles.claseDesdeModule} `

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
            className={classProps}
        >
           {content}
        </button>
    );
}

export default Button;
