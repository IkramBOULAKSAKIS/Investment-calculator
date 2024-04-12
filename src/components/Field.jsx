export default function Field({ label, initialValue, onChangeField, index }) {
  function handleChange(event) {
    onChangeField(index, event.target.value);
  }
  return (
    <li>
      <label id="label">{label}</label>
      <input type="number" value={initialValue} onChange={handleChange}></input>
    </li>
  );
}
