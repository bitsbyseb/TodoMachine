import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './styles.css';

const msgs = ["divide & conquer",
    "the first step to a good life is just try it",
    "if you believe it,just do it",
    "the man who don't know his story, is doomed to repeat it",
    "no one is born knowing everything",
    "veni,vidi,vici"
]

function TodoForm() {
    const { setOpenModal,createTodo } = useContext(TodoContext);
    const [newTodoValue,setNewTodoValue] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (newTodoValue !== '') {
                createTodo(newTodoValue);
                setOpenModal(false);
            }
        }}>
            <label htmlFor="todoValue">Write your new Todo</label>
            <textarea value={newTodoValue} onChange={(e) => setNewTodoValue(e.target.value)} name="" placeholder={msgs[parseInt(Math.random() * msgs.length - 1)]} id="todoValue" cols="10" rows="3"></textarea>
            <div className='buttonsLayout'>
                <button type="submit"  className="TodoSubmit">Add</button>
                <button type='button' onClick={() => setOpenModal(false)} className="TodoCancel">Cancel</button>
            </div>
        </form>
    )
}

export default TodoForm;