import { ChangeEvent, FormEvent, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //*Add todo
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  return (
    <div className="w-full h-screen bg-[url(./assets/bg-image.svg)] bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center text-center">
      <div className="flex justify-center items-center text-center">
        <div>
          <h1 className="text-6xl font-bold text-[#d8d8d8] mb-12">TodoList</h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              className="bg-transparent backdrop-blur-md text-white p-2 mb-7 border border-[#29A692] rounded"
            />
            <input
              type="submit"
              value="  +  "
              className="p-2 bg-[#97dfd3] ml-2  mb-7 rounded "
            />
          </form>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="bg-[#232323] text-white rounded mb-1 p-2 border border-white"
              >
                {todo.inputValue}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
