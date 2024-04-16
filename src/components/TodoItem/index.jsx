import { FaX,FaCheck } from "react-icons/fa6";
import './styles.css';
export default function TodoItem({text,completed,onCompleted,onDeleted}) {
  return (
    <div className={`itemContainer ${completed ? 'itemCompleted' : ''}`}>
      <button className="delete" onClick={(e) =>{onDeleted()}}>
        <FaX />
      </button>
      <h2>{text}</h2>
      <button onClick={(e) => {
        onCompleted();
      }} className={`complete ${completed ? 'inactive' : ''}`}>
        <FaCheck/>
      </button>
    </div>
  )
}
