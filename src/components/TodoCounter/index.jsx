import './styles.css';

export default function TodoCounter({total,completed}) {
  let currentMsg = `you have completed ${completed} TODOs from ${total}`;
  const onCompleteMsg = 'Congratulations, you had been completed all TODOs';
  const onTheresNoTodos = "you don't have any Todos,why don't you write something?";

  if (total === completed && total > 0) {
      currentMsg = onCompleteMsg;
  } else if (total === 0) {
    currentMsg = onTheresNoTodos;
  }
  
  return (
    <>
      <h2 className="counter">{currentMsg}</h2>
    </>
    )
}