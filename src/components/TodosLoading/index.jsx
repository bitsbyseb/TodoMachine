import './styles.css';

export default function TodosLoading() {
  return (
    <div className={"loading-itemContainer"}>
      <button className="loading-delete">
      </button>
      <h2></h2>
      <button className={"loading-complete loading-inactive"}>
      </button>
    </div>
  )
}
