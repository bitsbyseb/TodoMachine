import './styles.css';
export default function CreateTodoButton({onClickCallback}) {
    return (
        <button className="create" onClick={() => onClickCallback()}>+</button>
    )
}
