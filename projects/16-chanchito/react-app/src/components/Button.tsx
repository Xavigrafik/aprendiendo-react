import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    isLoading: boolean;
    onClick: () => void;
    classProps?: string;
};

function Button({ children, isLoading, onClick, classProps = ''  }: Props) {
    return (
        <button
            disabled={isLoading}
            onClick={onClick}
            type="button"
            className={`
                btn btn-${isLoading ? 'secondary' : 'primary'}
                ${classProps}
            `}
        >
            {isLoading ? "Cargando..." : children }
        </button>
    );
}

export default Button;
