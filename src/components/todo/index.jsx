import { v4 } from "uuid";
import { FaListCheck } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import TodoItem from "../todoItem";
import { useRef, useState, useEffect } from "react";

const Todo = () => {
  // useState && useRef
  const [todos, setTodos] = useState([]); // Başlangıç değeri olarak boş bir dizi verildi
  const inputRef = useRef();

  // ! Add Todo Function
  const addTodos = () => {
    // İnputtaki değere eriş ve boşlukları kaldır
    const inputContent = inputRef.current.value.trim();

    // input içeriğini kontrol et
    if (!inputContent) return;

    // Todo objesi oluştur
    const newTodo = {
      id: v4(),
      text: inputContent,
      isCompleted: false,
    };

    // Önceki todoları tutup yeni todo ekledik
    setTodos((prev) => [...prev, newTodo]);
    console.log(newTodo);

    // İnputun içeriğini sıfırla
    inputRef.current.value = "";
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="bg-white place-self-center w-[450px] h-[600px] p-12 flex flex-col gap-5 rounded-lg">
      {/* Title */}
      <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-wider ">
        <FaListCheck />
        Todo App
      </h1>
      {/* Add Todo Area */}
      <div className="flex items-center bg-[#eeeeee] p-1 rounded-full">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 px-5 bg-transparent border-none outline-none placeholder:text-slate-400"
          placeholder="Add Todo"
        />
        <div
          className="flex items-center justify-center h-full p-1 rounded-r-full cursor-pointer w-14"
          onClick={addTodos}
        >
          <IoIosAddCircle className="size-8" />
        </div>
      </div>
      {/* Todo Items Area */}
      <div className="px-2 mt-5 overflow-auto">
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
