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
    
    const isLoadingClass = `btn btn-${isLoading ? 'secondary LOADING' : 'primary'}`;
    const classProps = `${isLoadingClass} ${className} ${styles.claseDesdeModule} `

    return (
        <button
            disabled={isLoading}
            onClick={onClick}
            type="button"
            className={classProps}
        >
            {isLoading ? "Cargando..." : sent ? "Enviado!" : children}
        </button>
    );
}

export default Button;
