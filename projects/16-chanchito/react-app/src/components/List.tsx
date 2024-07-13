import { MouseEvent, useState } from "react";

type Props = {
    data: string[];
    onSelect?: (el: string) => void;
};

function List({ data, onSelect }: Props) {

    const [active, setActive]= useState(0)

    const handleClick = (i:number, el:string, e:MouseEvent) => {
        onSelect?.(el);
        setActive(i);

        console.log(e.target);
        console.log(el);
        
    };

    return (
        <ul className="list-group">
            {data.map((el, i) => (
                <li onClick={(e) => handleClick(1, el, e)} key={el} className={`list-group-item  ${active == i ? "active" : ""}`}>
                    {el}
                </li>
            ))}
        </ul>
    );
}

export default List;
