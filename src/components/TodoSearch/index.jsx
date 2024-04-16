import './styles.css';
export default function TodoSearch({value,setValue}) {
    return (
        <input type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='write something here' />
    )
}