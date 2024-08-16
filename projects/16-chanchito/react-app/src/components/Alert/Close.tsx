
type Props = {
    white?: boolean
}

function Close({white}: Props) {
  return (
      <button  type="button" className={`btn-close ${white && "btn-close-white"}`} data-bs-dismiss="alert" aria-label="Close"></button>
  )
}

export default Close