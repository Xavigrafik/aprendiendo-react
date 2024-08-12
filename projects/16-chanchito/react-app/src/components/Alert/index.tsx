import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    status: boolean;
    onClick: () => void;
}

function Alert({children, status, onClick}: Props) {
  return (
    <div  className={`my-3 alert ${status ? 'alert-primary' : 'alert-danger'} `} onClick={onClick}>
        {children}
    </div>
  )
}

export default Alert;