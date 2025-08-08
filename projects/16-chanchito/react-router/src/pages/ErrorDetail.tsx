import { isRouteErrorResponse, useRouteError } from "react-router-dom"

type Props = {}

function ErrorDetail({ }: Props) {
    
    const error = useRouteError();
    console.error(error);

  return (
      <div>
          {isRouteErrorResponse(error) ? "La página no existe" : `Ha ocurrido un error: ${(error as Error).message}`}
    </div>
  )
}

export default ErrorDetail