import './styles.css';
export default function TodoList({children}) {
    return (
        <div className="list">
            {children}
        </div>
    )
}
