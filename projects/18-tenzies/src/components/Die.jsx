
export default function Die(props) {



    const { id, value, isHeld, hold } = props;


    return (
        <button
            id={id}
            className={`die ${isHeld && "isHeld"}`}
            onClick={hold}>
            {value || "x" }
        </button>
    )
}