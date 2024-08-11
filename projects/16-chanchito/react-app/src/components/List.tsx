import { MouseEvent, useState } from "react";

type Props = {
    data: string[];
    onSelect?: (el: string) => void;
};

function List({ data, onSelect }: Props) {

    const [active, setActive]= useState(0)

    const handleClick = (i: number, el: string, e: MouseEvent) => {
        // i es el "indice activo"
        onSelect?.(el);
        setActive(i)
    };

    return (
        <ul className="list-group">
            {data.map((el, i) => (
                <li onClick={(e) => handleClick(i, el, e)} key={i} className={`list-group-item  ${active == i ? "active" : ""}`}>
                    {el}
                </li>
            ))}
        </ul>
    );
}

export default List;
