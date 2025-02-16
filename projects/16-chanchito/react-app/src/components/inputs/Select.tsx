type Props = {};

const Select = (props: Props) => {
  return (
    <select className="form-select" aria-label="Default select example" defaultValue={""}>
      <option value="">Select one option</option> {/* value vacío para la opción por defecto */}
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};

export default Select;