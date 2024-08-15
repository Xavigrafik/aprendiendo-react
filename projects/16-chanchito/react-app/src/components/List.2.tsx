type Props = {
    data: DataItem[]; // Array de objetos que siguen la estructura de DataItem
    onSelect?: (el: string) => void;
};
type DataItem = {
    id?: number;
    name?: string;
};

function List2({ data }: Props) {

    return (
        
        <ul className="list-group">
            {data.map((el, i) => (
                <li  key={i} className={`list-group-item`}>
                    {el.id} - {el.name}
                </li>
            ))}
        </ul>
    );
}

export default List2;
