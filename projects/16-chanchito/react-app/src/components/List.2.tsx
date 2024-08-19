type Props = {
    data: DataItem[]; // Array de objetos que siguen la estructura de DataItem
    onSelect?: (el: string) => void;
};
type DataItem = {
    id?: number;
    name?: string;
    isInitial?: boolean;
};


function List2({ data }: Props) {
    return (
      <>
        {data.length > 0 ? (
          <div className="list-group" id="list2">
            {data.map((el) => (
              <a href="#!" key={el.id} className={`list-group-item list-group-item-action ${el.isInitial ? "bg-dark-subtle" : "bg-body-tertiary"}`}>
                {el.id} - {el.name}
              </a>
            ))}
          </div>
        ) : (<p>No items found.</p>)
        }
      </>
    );
  }

export default List2;
