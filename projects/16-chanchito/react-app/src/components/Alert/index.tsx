import { ReactNode } from "react"
import styles from "./Alert.module.scss";

type Props = {
    children: ReactNode;
}

function Alert({children}: Props) {
  return (
    <div className={`my-3 alert ${styles.alertCustom} `}>
      {children}
    </div>
  )
}

export default Alert;