import { isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorDetail() {
    
    const error = useRouteError();
    console.error(error);

  return (
      <div>
          {isRouteErrorResponse(error) ? "La página no existe" : `Ha ocurrido un error: ${(error as Error)}`}
    </div>
  )
}

export default ErrorDetail