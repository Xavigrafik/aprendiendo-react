import { ReactNode } from "react"
import styles from "./Alert.module.scss";
import Close from "./Close";

type Props = {
    children: ReactNode;
    dismisable?: boolean;
}


function Alert({children, dismisable}: Props) {
  return (
    <div className={`my-3 alert ${dismisable && "alert-dismissible"} ${styles.alertCustom} `}>
        {dismisable && <Close white={true}></Close>}
        {children}
      </div>
  )
}

export default Alert;