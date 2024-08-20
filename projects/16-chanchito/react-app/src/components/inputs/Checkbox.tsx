import "./Inputs.scss";

type Props = {
  name: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const CheckBox = ({ name, checked, disabled, onChange  }: Props): JSX.Element => {

  return (
    <div className={`check_Block_${name}`}>
      <input
        type="checkbox"
        id={`checkbox_${name}`}
        className="checkbox"
        name={name}
        value={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={`checkbox_${name}`}>{name}</label>
    </div>
  );
}

export default CheckBox;
